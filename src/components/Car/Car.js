import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div className='car'>
            <p>Car id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Price: {price}</p>
            <p>Year: {year}</p>
            <button className='btn' onClick={() => dispatch(carActions.setCarToUpdate(car))}>Update</button>
            <button className='btn' onClick={() => dispatch(carActions.deleteSelectedCar({id}))}>Delete</button>
        </div>
    );
};

export {Car};