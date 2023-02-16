import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux";

const User = ({user}) => {
    const {id, name} = user;
    const dispatch = useDispatch();

    return (
        <div className='user'>
            <h4>{id}. {name}</h4>
            <button className='btn' onClick={() => dispatch(userActions.setSelectedUser(user))}>Details</button>
            <button className='btn' onClick={() => dispatch(userActions.getUserById({id}))}>Select</button>
        </div>
    );
};

export {User};