import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi/dist/joi";
import {userValidator} from "../../validators";
import React from "react";


const UserForm = ({submit, error, button}) => {

    const {register, handleSubmit, formState: {isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(submit)}>
                    <input type="text" placeholder={'username'} {...register('username')}/>
                    <input type="password" placeholder={'password'} {...register('password')}/>
                    <button disabled={!isValid}>{button}</button>
                </form>
            </div>
            <div>{
                error && <div>{JSON.stringify(error)}</div>
            }</div>
        </div>
    );
};

export {UserForm};
