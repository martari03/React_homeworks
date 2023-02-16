import React, {useState} from 'react';

import {CarForm, Cars} from "../../components";
import './CarsPage.css';

const CarsPage = () => {
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div className='wrapper'>
            <CarForm carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarsPage};