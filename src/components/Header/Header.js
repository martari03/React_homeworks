import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'animals'}>Cats and Dogs</NavLink>
            <NavLink to={'users'}>Users</NavLink>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {Header};