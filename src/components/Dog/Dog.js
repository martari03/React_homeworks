import React from 'react';

import {animalsActions} from "../../reducers";

const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;

    return (
        <div className='dog'>
            <p>{id}. {name}</p>
            <button className='btn' onClick={() => dispatch(animalsActions.DELETE_DOG_BY_ID(id))}>Delete</button>
        </div>
    );
};

export {Dog};