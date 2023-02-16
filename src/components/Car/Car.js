import React from 'react';

import {useMyAppReducer} from "../../hooks";
import {userActions} from "../../reducers";

const Car = ({car, setCarForUpdate}) => {
    const [, dispatch] = useMyAppReducer(value => value.carReducer);
    const {id, brand, year, price} = car;

    return (
        <div className='car'>
            <p>Id: {id}</p>
            <p>Brand: {brand}</p>
            <p>Year: {year}</p>
            <p>Price: {price}</p>
            <button className='btn' onClick={() => dispatch(userActions.DELETE_BY_ID(id))}>Delete</button>
            <button className='btn' onClick={() => setCarForUpdate(car)}>Update</button>
        </div>
    );
};

export {Car};