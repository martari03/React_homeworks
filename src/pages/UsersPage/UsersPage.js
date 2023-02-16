import React from 'react';
import {useSelector} from "react-redux";

import {ChosenUser, Users} from "../../components";
import './UsersPage.css';

const UsersPage = () => {
    const {selectedUser} = useSelector(state => state.userReducer);

    return (
        <div>
            {selectedUser && <div className='userWrapper'><ChosenUser/></div>}
            <hr/>
            <Users/>
        </div>
    );
};

export {UsersPage};