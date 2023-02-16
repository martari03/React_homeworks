import React from 'react';
import {NavLink} from "react-router-dom";

import {useAuthContext} from "../../hooks";

const Navigation = () => {
    const {user, logOut} = useAuthContext();

    return (
        <div className={'navigation'}>
            {user &&
                <div className={'user'}>
                    {user}
                    <button className={'btn'} onClick={() => logOut()}>Log Out</button>
                </div>}
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
        </div>
    );
};

export {Navigation};