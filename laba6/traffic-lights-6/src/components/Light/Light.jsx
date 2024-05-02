import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import s from './Light.module.css';

const Light = (props) => {
    return (
      <motion.div
        className={s.light} 
        style={{background: props.lightItem.color}}
        key={props.lightItem.id}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.1 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ opacity: 0.6 }}
        onClick={() => {props.clickLight(props.lightItem.id)}}
      >
        {props.lightItem.clickcount}
    </motion.div>
    )

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