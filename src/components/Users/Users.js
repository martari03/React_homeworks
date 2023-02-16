//вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
// пости мають виводитись під компонентою Users (в App компоненті)

import React, {useEffect, useState} from 'react';

import {configsService} from "../../services";
import {User} from "../User/User";
import {Posts} from "../Posts/Posts";
import './Users.css'

const Users = () => {

    const [users, setUsers] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        configsService.getAll().then(value => value.data).then(value => setUsers([...value]))
    }, [])

    return (
        <div className="wrapper">
            <div className='users'>{users.map(user => <User key={user.id} user={user} onSelectUser={setUserId}/>)}</div>
            {!!userId && <Posts id={userId}/>}
        </div>
    );
};

export {Users};