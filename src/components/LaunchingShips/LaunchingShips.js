//є API от SpaceX
// https://api.spacexdata.com/v3/launches/
// потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скриншоті в теці)

import React, {useEffect, useState} from 'react';

import './LaunchingShips.css'
import {LaunchingShip} from "../LaunchingShip/LaunchingShip";
import {launchService} from "../../services";

const LaunchingShips = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        launchService.getAll().then(value => value.data).then(value => setLaunches([...value]))
    }, []);

    return (
        <div className='launches'>
            {launches.filter(value => value.launch_year !== '2020').map(launch => <LaunchingShip
                key={launch.flight_number} launch={launch}/>)}
        </div>
    );
};

export {LaunchingShips};