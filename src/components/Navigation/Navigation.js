import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Navigation.module.css';

const Navigation = () => {
    return (
        <div className={css.navigation}>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'register'}>Register</NavLink>
        </div>
    );
};

export {Navigation};