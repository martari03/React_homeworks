import React from 'react';

import {CarForm, Cars} from "../../components";
import './CarsPage.css';

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};