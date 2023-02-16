import React from 'react';
import {Outlet} from "react-router-dom";

import {Navigation} from "../../components";
import css from './MainLayout.module.css';

const MainLayout = () => {
    return (
        <div className={css.wrapper}>
            <Navigation/>
            <div className={css.page}>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};