import React from 'react';

import {animalsActions} from "../../reducers";

const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;

    return (
        <div className='cat'>
            <p>{id}. {name}</p>
            <button className='btn' onClick={() => dispatch(animalsActions.DELETE_CAT_BY_ID(id))}>Delete</button>
        </div>
    );
};

export {Cat};