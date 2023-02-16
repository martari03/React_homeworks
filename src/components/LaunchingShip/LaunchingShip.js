import React from 'react';

import './LaunchingShip.css'

const LaunchingShip = ({launch}) => {

    const {mission_name, launch_year} = launch;
    const {links: {mission_patch_small}} = launch;

    return (
        <div className='launch'>
            <h3>Mission name: {mission_name}</h3>
            <h5>Launch year: {launch_year}</h5>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {LaunchingShip};