import React, { useState, useEffect } from 'react';
import s from './Light.module.css';

const Light = (props) => {
    const [count, setCount] = useState(0);

    return (
        <div 
            className={s.light} 
            style={{background: props.tlColor}} 
            onClick={() => setCount(count + 1)}
        >
            {count}
        </div>
    );
}

Light.defaultProps = {
    tlColor: "red",
};

export default Light;