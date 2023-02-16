import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {useMyAppReducer} from "../../hooks";
import {carActions} from "../../reducers";

const CarForm = ({carForUpdate, setCarForUpdate}) => {
    const {register, reset, handleSubmit, setValue} = useForm();
    const [, dispatch] = useMyAppReducer(value => value.carReducer);

    useEffect(() => {
        if (carForUpdate) {
            setValue('name', carForUpdate.brand)
            setValue('surname', carForUpdate.year)
            setValue('age', carForUpdate.price)
        }
    }, [setValue, carForUpdate]);

    const save = (car) => {
        if (carForUpdate) {
            dispatch(carActions.UPDATE_BY_ID(carForUpdate.id, car));
            setCarForUpdate(null);
            reset();
        } else {
            if (car.brand && car.year && car.price) {
                dispatch(carActions.ADD(car));
                reset();
            }
        }
    };

    return (
        <div className='form'>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button className='btn'>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {CarForm};