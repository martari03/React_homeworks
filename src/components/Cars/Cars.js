import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars, errors, loading} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAllCars())
    }, [dispatch]);

    return (
        <div className='cars'>
            {errors && JSON.stringify(errors)}
            {loading && <h3>The page is loading</h3>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};