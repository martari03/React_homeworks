import React, {useEffect, useState} from 'react';

import {User} from "../User/User";
import {UserForm} from "../UserForm/UserForm";
import {userService} from "../../services";
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers([...data]))
    }, [])


    return (
        <div className="wrapper">
            <UserForm setUsers={setUsers}/>
            <div className='divider'/>
            <div className='users'>{users.map(user => <User key={user.id} user={user}/>)}</div>
        </div>
    );
};

export {Users};