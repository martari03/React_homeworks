import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const navigate = useNavigate();

    const {postId, id, name, email, body} = comment;

    return (
        <div className='comment'>
            <div className='commentBody'><h3>Name: {name}</h3>
                <p><b>Post Id:</b> {postId}</p>
                <p><b>Id:</b> {id}</p>
                <p><b>Email:</b> {email}</p>
                <p><b>Body:</b> {body}</p></div>
            <button className='btn' onClick={() => navigate(postId.toString())}>See Post</button>
        </div>
    );
};

export {Comment};