import React, {useState} from 'react';
import {userService} from "../../services";
import {UserForm} from "../../components";
import {useNavigate} from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const registerUser = async (user) => {
        try {
            await userService.createUser(user)
            navigate('/login')
        } catch (e) {
            setError(e.response.data)
        }
    };

    return (
        <div>
            <UserForm submit={registerUser} error={error} button={'Register'}/>
        </div>
    );
};

export {RegisterPage};