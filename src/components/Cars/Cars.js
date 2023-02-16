import React from 'react';

import {useMyAppReducer} from "../../hooks";
import {Car} from "../Car/Car";

const Cars = ({setCarForUpdate}) => {
    const [cars] = useMyAppReducer(value => value.carReducer);

    return (
        <div className='cars'>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};