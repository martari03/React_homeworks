import React from 'react';
import {useForm} from "react-hook-form";
// import {joiResolver} from "@hookform/resolvers/joi";
// import {userValidator} from "../../validators";
import {userService} from "../../services";
import './UserForm.css'

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        // resolver: joiResolver(userValidator)
    });
    const submit = async (user) => {
        console.log(user);
        const {data} = await userService.createUser(user);
        setUsers(prev => [...prev, data]);
        reset();
    };


    return (
        <div className='form'>
            <form onSubmit={handleSubmit(submit)}>
                <h4>Enter Info About User Here:</h4>
                <input type="text" placeholder={'name'} {...register('name')}/>
                {errors.name && <span>{errors.name.message}</span>}
                <input type="text" placeholder={'username'} {...register('username')}/>
                {errors.username && <span>{errors.username.message}</span>}
                <input type="text" placeholder={'email'} {...register('email')}/>
                {errors.email && <span>{errors.email.message}</span>}
                <input type="text" placeholder={'phone'} {...register('phone')}/>
                {errors.phone && <span>{errors.phone.message}</span>}
                <input type="text" placeholder={'website'} {...register('website')}/>
                {errors.website && <span>{errors.website.message}</span>}
                <h5>Enter Info About User's Address Here:</h5>
                <input type="text" placeholder={'street'} {...register('address.street')}/>
                {/*{errors.street && <span>{errors.street.message}</span>}*/}
                <input type="text" placeholder={'suite'} {...register('address.suite')}/>
                {/*{errors.suite && <span>{errors.suite.message}</span>}*/}
                <input type="text" placeholder={'city'} {...register('address.city')}/>
                {/*{errors.city && <span>{errors.city.message}</span>}*/}
                <input type="text" placeholder={'zipcode'} {...register('address.zipcode')}/>
                {/*{errors.zipcode && <span>{errors.zipcode.message}</span>}*/}
                <h5>Enter Info About User's Geo Here:</h5>
                <input type="text" placeholder={'latitude'} {...register('address.geo.lat')}/>
                {/*{errors.lat && <span>{errors.lat.message}</span>}*/}
                <input type="text" placeholder={'longitude'} {...register('address.geo.lng')}/>
                {/*{errors.lng && <span>{errors.lng.message}</span>}*/}
                <h5>Enter Info About User's Company Here:</h5>
                <input type="text" placeholder={'companyName'} {...register('company.name')}/>
                {/*{errors.companyName && <span>{errors.companyName.message}</span>}*/}
                <input type="text" placeholder={'catchPhrase'} {...register('company.catchPhrase')}/>
                {/*{errors.catchPhrase && <span>{errors.catchPhrase.message}</span>}*/}
                <input type="text" placeholder={'bs'} {...register('company.bs')}/>
                {/*{errors.bs && <span>{errors.bs.message}</span>}*/}
                <button className='btn' disabled={!isValid}>Add new user</button>
            </form>
        </div>
    );
};

export {UserForm};