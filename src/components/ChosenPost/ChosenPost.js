import React from 'react';
import {useSelector} from "react-redux";

const ChosenPost = () => {
    const {selectedPost} = useSelector(state => state.posts);

    const {userId, id, title, body} = selectedPost;

    return (
        <div className='selectedPost'>
            <h3>Post {id}:</h3>
            <p>Id: {id}</p>
            <p>User id: {userId}</p>
            <h4>Title: {title}</h4>
            <p>Body: {body}</p>
        </div>
    );
};

export {ChosenPost};