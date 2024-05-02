import React, { useState } from 'react';
import Light from "../Light/Light.jsx";
import StaticBar from '../StaticBar/StaticBar.jsx';
import s from "./TrafficLight.module.css";
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import LightContext from '../../context/LightContext.jsx';


const TrafficLights = (props) => {
    const params = useParams()
    const [rotation, setRotation] = useState(params.direction == "gorizontal" ? true : false)

    const {ligthData, updateLight} = useContext(LightContext);

    const clickLight = (id) => {
        // const updatedTrafficLightsData = ligthData.map(item => {
        //     if (item.id === id) {
        //         return { ...item, clickcount: item.clickcount + 1 };
        //     }
        //     return item;
        // });

        updateLight(id);
    }

    const clickRotation = () => {
        setRotation(!rotation)
    }

    return (
        <div className={s.traffic_light_wrapper}>
            <div 
                className={s.traffic_light + ' ' + (rotation ? s.gorizontal : s.vertical)} >
                {ligthData.map(lightItem => (
                    <Light lightItem={lightItem} clickLight={clickLight} />
                ))}
            </div>
            <div className="staticbar">
                <StaticBar TrafficLightsData={ligthData} clickRotation={clickRotation}/>
            </div>
        </div>
    );
}

export default TrafficLights;
