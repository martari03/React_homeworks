//1. Описати всю сім'ю Сімпсонів (5 персонажів)

import React from "react";
import './SimpsonMember.css';

export const SimpsonMember = ({name, image, bio}) => {
    const divClass = 'simpson';
    return (
        <div className={divClass}>
            <h3>{name}</h3>
            <img src={image} alt={name}/>
            <p>{bio}</p>
        </div>
    );
};