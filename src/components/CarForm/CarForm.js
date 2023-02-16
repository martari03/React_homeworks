import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carService} from "../../services";
import './CarForm.css';

const CarForm = ({setCars, carToUpdate, setCarToUpdate}) => {

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (carToUpdate) {
            setValue('brand', carToUpdate.brand);
            setValue('price', carToUpdate.price);
            setValue('year', carToUpdate.year);
        }
    }, [setValue, carToUpdate]);

    const submit = async (car) => {
        if (carToUpdate) {
            await carService.updateSelectedCar(carToUpdate.id, car).then(() => {
                carService.getAllCars().then(({data}) => setCars([...data]));
            })
            reset();
            setCarToUpdate(null);
        } else {
            await carService.createCar(car);
            carService.getAllCars().then(({data}) => setCars([...data]));
        }
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submit)}>
                <h4>Enter Info About Car Here:</h4>
                <input type="text" placeholder={'brand'}{...register('brand')}/>
                {errors.brand && <div>{errors.brand.message}</div>}
                <input type="text" placeholder={'price'}{...register('price')}/>
                {errors.price && <div>{errors.price.message}</div>}
                <input type="text" placeholder={'year'}{...register('year')}/>
                {errors.year && <div>{errors.year.message}</div>}
                <button className='btn' disabled={!isValid}>{carToUpdate ? 'Update car' : 'Create car'}</button>
            </form>
        </div>
    );
};

export {CarForm};