//2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів

import React from "react";
import './Rick&Morty.css';

export const RickMorty = ({id, name, status, species, gender, image}) => {
    const divClass = 'rickMorty';
    return (
        <div className={divClass}>
            <h3>{id}. {name}</h3>
            <h5>{status}, {species}, {gender}</h5>
            <img src={image} alt={name}/>
        </div>
    );
};