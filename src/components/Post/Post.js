import React from 'react';

import './Post.css'

const Post = ({post}) => {

    const {userId, id, title, body} = post

    return (
        <div className='post'>
            <h4>Title: {title}</h4>
            <p><b>User id:</b> {userId}</p>
            <p><b>Post id:</b> {id}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export {Post};