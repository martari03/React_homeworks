import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={css.navigation}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {Navigation};