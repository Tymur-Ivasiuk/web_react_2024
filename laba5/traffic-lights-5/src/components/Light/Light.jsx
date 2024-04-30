import React, { useState, useEffect } from 'react';
import s from './Light.module.css';

const Light = (props) => {
    return (
        <div 
            className={s.light} 
            style={{background: props.lightItem.color}} 
            onClick={() => props.clickLight(props.lightItem.id)}
        >
            {props.lightItem.clickcount}
        </div>
    );
}

Light.defaultProps = {
    lightItem: {
        id: 1,
        color: 'red',
        description: "Червоний",
        clickcount: 0
    }
};

export default Light;