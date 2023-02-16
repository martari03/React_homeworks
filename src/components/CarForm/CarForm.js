import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {carValidator} from "../../validators";
import {carActions} from "../../redux";

const CarForm = () => {
    const {register, handleSubmit, reset, setValue, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(carValidator)
    });
    const dispatch = useDispatch();
    const {carToUpdate} = useSelector(state => state.cars);

    useEffect(() => {
        if (carToUpdate) {
            setValue('brand', carToUpdate.brand, {shouldValidate: true})
            setValue('price', carToUpdate.price, {shouldValidate: true})
            setValue('year', carToUpdate.year, {shouldValidate: true})
        }
    }, [carToUpdate, setValue]);

    const createCar = async (car) => {
        await dispatch(carActions.createCar({car}));
        reset();
    };

    const updateCar = async (car) => {
        await dispatch(carActions.updateSelectedCar({id: carToUpdate.id, value: car}));
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carToUpdate ? updateCar : createCar)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
            <button className='btn' disabled={!isValid}>{carToUpdate ? 'Update' : 'Create'}</button>
        </form>
    );
};

export {CarForm};