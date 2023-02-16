//Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий коментар
// постовим запитом на http://jsonplaceholder.typicode.com/comments

import React from 'react';

import './Comment.css'

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div className='comment'>
            <h3>Name: {name}</h3>
            <p><b>Id:</b> {id}</p>
            <p><b>Post Id:</b> {postId}</p>
            <p><b>Email:</b> {email}</p>
            <p><b>Body:</b> {body}</p>
        </div>
    );
};

export {Comment};