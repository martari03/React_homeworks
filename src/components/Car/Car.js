import React from 'react';

import {carService} from "../../services";
import './Car.css';

const Car = ({car, setCarToUpdate, setCars}) => {

    const {id, brand, price, year} = car;

    const deleteSelectedCar = async id => {
        await carService.deleteSelectedCar(id).then(() => {
            carService.getAllCars().then(({data}) => setCars([...data]))
        })
    };

    return (
        <div className='car'>
            <p><b>Car Id:</b> {id}</p>
            <p><b>Brand:</b> {brand}</p>
            <p><b>Price:</b> {price}</p>
            <p><b>Year:</b> {year}</p>
            <button className='btn' onClick={() => setCarToUpdate(car)}>Update</button>
            <button className='btn' onClick={() => deleteSelectedCar(id)}>Delete</button>
        </div>
    );
};

export {Car};