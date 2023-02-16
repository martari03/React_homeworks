import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";
import {UserForm} from "../../components";

const LoginPage = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const login = async (userCredential) => {
        try {
            await authService.login(userCredential);
            navigate('/cars')
        } catch (e) {
            if (e.response.status === 401) {
                setError(e.response.data)
            }
        }
    };

    return (
        <div>
            <UserForm error={error} submit={login} button={'LogIn'}/>
        </div>
    );
};

export {LoginPage};