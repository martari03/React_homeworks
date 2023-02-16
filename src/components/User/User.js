//Зробити компонент, в якому буде форма, за допомоги якої можливо створити
// нового юзера постовим запитом на http://jsonplaceholder.typicode.com/users

import React from 'react';

import './User.css'

const User = ({user}) => {
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
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <h4>Address:</h4>
            <p>Street: {street}</p>
            <p>Suite: {suite}</p>
            <p>City: {city}</p>
            <p>Zipcode: {zipcode}</p>
            <h4>Geo:</h4>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lng}</p>
            <h4>Company:</h4>
            <p>Company name: {companyName}</p>
            <p>Catch phrase: {catchPhrase}</p>
            <p>BS: {bs}</p>
        </div>
    );
};

export {User};