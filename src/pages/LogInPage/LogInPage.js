import React, {useRef} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

import {useAuthContext} from "../../hooks";

const LogInPage = () => {
    const username = useRef();
    const {logIn} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation();


    const login = () => {
        logIn(username.current.value);
        navigate(state.pathname, {replace: true})
    };

    return (
        <div className='input'>
            <input type="text" placeholder='username' ref={username}/>
            <button className='btn' onClick={() => login()}>Log In</button>
        </div>
    );
};

export {LogInPage};