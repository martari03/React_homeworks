import React from 'react';

const Todo = ({todo}) => {

    const {userId, id, title, completed} = todo;

    return (
        <div className='todo'>
            <h4>Title: {title}</h4>
            <p>User Id: {userId}</p>
            <p>Id: {id}</p>
            <p>Status: {completed ? "You have done it! :)" : "You need to do it! :("}</p>
        </div>
    );
};

export {Todo};