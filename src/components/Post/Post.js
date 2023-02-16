import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {

    console.log(post);

    const navigate = useNavigate();

    const {userId, id, title, body} = post;

    return (
        <div className='post'>
            <div className='postBody'>
                <h3>Title: {title}</h3>
                <p><b>User Id:</b> {userId}</p>
                <p><b>Id:</b> {id}</p>
                <p><b>Body:</b> {body}</p>
            </div>
            <button className='btn' onClick={() => navigate(-1)}>Back</button>
        </div>
    );
};

export {Post};