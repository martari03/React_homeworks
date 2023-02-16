import React from 'react';

import './User.css'

const User = ({user, onSelectUser}) => {

    const {
        id,
        name,
        username,
        email,
        address: {street, suite, city, zipcode, geo: {lat, lng}},
        phone,
        website,
        company: {name: companyName, catchPhrase, bs}
    } = user;

    return (
        <div className='user'>
            <h3>User {id}:</h3>
            <div className='userInfo'>
                <p>Id: {id}</p>
                <p>Name: {name}</p>
                <p>Username: {username}</p>
                <p>Email: {email}</p>
                <h4>Address:</h4>
                <p>Street: {street}</p>
                <p>Suite: {suite}</p>
                <p>City: {city}</p>
                <p>Zipcode: {zipcode}</p>
                <h4>Geo:</h4>
                <p>Latitude: {lat}</p>
                <p>Longitude: {lng}</p>
                <p>Phone: {phone}</p>
                <p>Website: {website}</p>
                <h4>Company:</h4>
                <p>Company name: {companyName}</p>
                <p>Catch phrase: {catchPhrase}</p>
                <p>BS: {bs}</p></div>
            <div className='button'>
                <button className='btn' onClick={() => onSelectUser(id)}>Show posts of this user</button>
            </div>
        </div>
    );
};

export {User};