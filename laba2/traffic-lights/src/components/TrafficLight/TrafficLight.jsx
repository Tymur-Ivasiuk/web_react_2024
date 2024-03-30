import Light from "../Light/Light.jsx";
import s from "./TrafficLight.module.css";

const TrafficLights = (props) => {
    return (
        <div 
            className={s.traffic_light + ' ' + (props.gorizontal ? s.gorizontal : s.vertical)} >
            <Light tlColor='red' />
            <Light tlColor='yellow' />
            <Light tlColor='green' />
        </div>
    );
}

export default TrafficLights;
