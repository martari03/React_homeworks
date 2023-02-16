import React from 'react';
import {Outlet} from "react-router-dom";

import {Comments} from "../../components";
import './CommentsPage.css';

const CommentsPage = () => {
    return (
        <div>
            <Comments/>
            <div className='divider'/>
            <div className='postWrapper'><Outlet/></div>
        </div>
    );
};

export {CommentsPage};