import React, { useState, useEffect } from 'react';
import Light from "../Light/Light.jsx";
import StaticBar from '../StaticBar/StaticBar.jsx';
import s from "./TrafficLight.module.css";


const TrafficLights = (props) => {
    const [rotation, setRotation] = useState(Boolean(props.gorizontal))
    const [TrafficLightsData, setTrafficLightsData] = useState([
        {
            id: 1,
            color: 'red',
            description: "Червоний",
            clickcount: 0
        },
        {
            id: 2,
            color: 'yellow',
            description: "Жовтий",
            clickcount: 0
        },
        {
            id: 3,
            color: 'green',
            description: "Зелений",
            clickcount: 0
        }
    ]);

    const clickLight = (id) => {
        const updatedTrafficLightsData = TrafficLightsData.map(item => {
            if (item.id === id) {
                return { ...item, clickcount: item.clickcount + 1 };
            }
            return item;
        });

        setTrafficLightsData(updatedTrafficLightsData);
    }

    const clickRotation = () => {
        setRotation(!rotation)
    }

    return (
        <div className={s.traffic_light_wrapper}>
            <div 
                className={s.traffic_light + ' ' + (rotation ? s.gorizontal : s.vertical)} >
                {TrafficLightsData.map(lightItem => (
                    <Light lightItem={lightItem} clickLight={clickLight} />
                ))}
            </div>
            <div className="staticbar">
                <StaticBar TrafficLightsData={TrafficLightsData} clickRotation={clickRotation}/>
            </div>
        </div>
    );
}

export default TrafficLights;
