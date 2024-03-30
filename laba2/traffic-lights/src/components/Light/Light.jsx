import React from 'react';
import s from './Light.module.css';

const Light = (props) => {
    return (
        <div className={s.light} style={{background: props.tlColor}}>
            
        </div>
    );
}

Light.defaultProps = {
    tlColor: "red",
};

export default Light;