import React from 'react';
import {Outlet} from "react-router-dom";

import {Navigation} from "../../components";
import './MainLayout.css'

const MainLayout = () => {
    return (
        <div className='wrapper'>
            <Navigation/>
            <div className='page'><Outlet/></div>
        </div>
    );
};

export {MainLayout};