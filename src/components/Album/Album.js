import React from 'react';

const Album = ({album}) => {

    const {userId, id, title} = album;

    return (
        <div className='album'>
            <h4>Title: {title}</h4>
            <h5>Id: {id} </h5>
            <h5>UserId: {userId}</h5>
        </div>
    );
};

export {Album};