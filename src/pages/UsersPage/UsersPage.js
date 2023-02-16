import React, {useState} from 'react';

import {UserForm, Users} from "../../components";
import './UsersPage.css';

const UsersPage = () => {
    const [userForUpdate, setUserForUpdate] = useState(null);

    return (
        <div className='wrapper'>
            <UserForm userForUpdate={userForUpdate} setUserForUpdate={setUserForUpdate}/>
            <hr/>
            <Users setUserForUpdate={setUserForUpdate}/>
        </div>
    );
};

export {UsersPage};