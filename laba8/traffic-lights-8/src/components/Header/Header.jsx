import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            <NavLink to={"/"} className={({ isActive }) =>
                [
                    isActive ? s.header_link_active : "",
                    s.header_link
                ].join(" ")
            }>
                Home
            </NavLink>
            <NavLink to={"/traffic-light/gorizontal"} reloadDocument className={({ isActive }) =>
                [
                    isActive ? s.header_link_active : "",
                    s.header_link
                ].join(" ")
            }>
                Traffic Light Gorizontal
            </NavLink>
            <NavLink to={"/traffic-light/vertical"} reloadDocument className={({ isActive }) =>
                [
                    isActive ? s.header_link_active : "",
                    s.header_link
                ].join(" ")
            }>
                Traffic Light Vertical
            </NavLink>
        </header>
    );
}

export default Header;