import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import s from './Light.module.css';

const Light = (props) => {
    return (
      <motion.div
        className={`${s.light} ${props.isActive ? s.active_light : ""}`} 
        style={{background: props.lightItem.color}}
        key={`${props.trafficLightId} ${props.lightItem.id}`}
        transition={{ duration: 0.1 }}
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 0.9 }}
        onClick={() => {props.clickLight(props.lightItem.id)}}
      >
        {/* {props.lightItem.clickcount} */}
    </motion.div>
    )

}

export default Light;