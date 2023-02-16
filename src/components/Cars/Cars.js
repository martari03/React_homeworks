import React, {useEffect, useState} from 'react';

import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";
import {carService} from "../../services";
import './Cars.css';

const Cars = () => {

    const [cars, setCars] = useState([]);
    const [carToUpdate, setCarToUpdate] = useState(null);

    useEffect(() => {
        carService.getAllCars().then(({data}) => setCars([...data]))
    }, []);

    return (
        <div className='wrapper'>
            <CarForm setCars={setCars} carToUpdate={carToUpdate} setCarToUpdate={setCarToUpdate}/>
            <div className='divider'/>
            <div className='cars'>{cars.map(car => <Car key={car.id} car={car} setCarToUpdate={setCarToUpdate}
                                                        setCars={setCars}/>)}</div>
        </div>
    );
};

export {Cars};