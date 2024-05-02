import React, { useState } from 'react';
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
                return (
                    <TrafficLight 
                        ligthData={trafficLight} 
                        direction={params.direction == "gorizontal" ? true : false}
                        clickLight={clickLight} />
                )
            })}
        </div>
    );
}

const TrafficLight = (props) => {
    const [direction, setDirection] = useState(props.direction)

    const clickRotation = () => {
        setDirection(!direction)
    }

    return (
        <div className={s.traffic_light_wrapper}>
            <div 
                className={s.traffic_light + ' ' + (direction ? s.gorizontal : s.vertical)} >
                {props.ligthData.light.map(lightItem => (
                    <Light 
                        trafficLightId={props.ligthData.id} 
                        lightItem={lightItem} 
                        clickLight={props.clickLight} 
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
