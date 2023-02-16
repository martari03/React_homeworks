import React from 'react';
import {NavLink} from "react-router-dom";

import './Navigation.css'

const Navigation = () => {
    return (
        <div className={'navigation'}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
        </div>
    );
};

export {Navigation};