import React, { useState, useEffect } from 'react';
import Light from "../Light/Light.jsx";
import StaticBar from '../StaticBar/StaticBar.jsx';
import s from "./TrafficLight.module.css";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import LightContext from '../../context/LightContext.jsx';


const TrafficLights = (props) => {
    const params = useParams()

    const {trafficLightData, updateLightClick} = useContext(LightContext);

    const clickLight = (trafficLightId, lightId) => {
        updateLightClick(trafficLightId, lightId);
    }

    return (
        <div className={s.traffic_light_list}>
            {trafficLightData.map((trafficLight) => {
                if (trafficLight.type == "traffic") {
                    return(<TrafficLight 
                            ligthData={trafficLight} 
                            direction={params.direction == "gorizontal" ? true : false}
                            clickLight={clickLight} />
                    )
                }
                if (trafficLight.type == "pedestrian") {
                    return(<PedestrianTrafficLight 
                        ligthData={trafficLight} 
                        direction={params.direction == "gorizontal" ? true : false}
                        clickLight={clickLight} />
                    )
                }
            })}
        </div>
    );
}

const TrafficLight = (props) => {
    const [direction, setDirection] = useState(props.direction)

    const clickRotation = () => {
        setDirection(!direction)
    }

    const clickCallback = (lightId) => {
        props.clickLight(props.ligthData.id, lightId)
    }

    return (
        <div className={s.traffic_light_wrapper}>
            <div 
                className={s.traffic_light + ' ' + (direction ? s.gorizontal : s.vertical)} >
                {props.ligthData.light.map(lightItem => (
                    <Light 
                        lightItem={lightItem} 
                        clickLight={clickCallback} 
                        isActive={props.ligthData.activeLight == lightItem.id}/>
                ))}
            </div>
            <div className="staticbar">
                <StaticBar TrafficLightsData={props.ligthData} clickRotation={clickRotation}/>
            </div>
        </div>
    )
}

const PedestrianTrafficLight = (props) => {
    const [direction, setDirection] = useState(props.direction)

    const clickRotation = () => {
        setDirection(!direction)
    }

    const clickCallback = (lightId) => {
        props.clickLight(props.ligthData.id, lightId)
    }

    useEffect(() => {
        const timer = setInterval(async () => {
            let sortedLight = props.ligthData.light.sort((a, b) => a - b)
            let currentIndex = sortedLight.findIndex((x) => x.id == props.ligthData.activeLight)
            console.log(currentIndex)
            debugger
            if (currentIndex >= sortedLight.length-1) {
                return clickCallback(sortedLight[0].id)
            } else {
                return clickCallback(sortedLight[currentIndex+1].id)
            }
        }, 10000);
    
        return () => clearInterval(timer);
      });

    return (
        <div className={s.traffic_light_wrapper}>
            <div 
                className={s.traffic_light + ' ' + (direction ? s.gorizontal : s.vertical)} >
                {props.ligthData.light.map(lightItem => (
                    <Light 
                        lightItem={lightItem} 
                        clickLight={clickCallback} 
                        isActive={props.ligthData.activeLight == lightItem.id}/>
                ))}
            </div>
            <div className="staticbar">
                <StaticBar TrafficLightsData={props.ligthData} clickRotation={clickRotation}/>
            </div>
        </div>
    )
}

export default TrafficLights;
