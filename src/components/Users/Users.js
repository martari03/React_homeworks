import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux";
import {User} from "../User/User";


const Users = () => {
    const dispatch = useDispatch();
    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(userActions.getAllUsers())
    }, [dispatch]);

    return (
        <div className='users'>
            {errors && JSON.stringify(errors)}
            {loading && <h3>The page is loading</h3>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};