import React, {useRef} from 'react';

import {animalsActions} from "../../reducers";
import {useMyAppReducer} from "../../hooks";
import {Cats, Dogs} from "../../components";
import './AnimalsPage.css';

const AnimalsPage = () => {
    const [state, dispatch] = useMyAppReducer((reducers) => reducers.animalsReducer);
    const catName = useRef();
    const dogName = useRef();

    const addCat = () => {
        dispatch(animalsActions.ADD_CAT(catName.current.value));
        catName.current.value = '';
    }

    const addDog = () => {
        dispatch(animalsActions.ADD_DOG(dogName.current.value));
        dogName.current.value = '';
    }

    return (
        <div className='animals'>
            <div>
                <h4>Cats:</h4>
                <div className='input'>
                    <input type='text' placeholder='catName' ref={catName}/>
                    <button className='btn' onClick={addCat}>Add Cat</button>
                </div>
                <Cats cats={state.cats} dispatch={dispatch}/>
            </div>
            <div>
                <h4>Dogs:</h4>
                <div className='input'>
                    <input type='text' placeholder='dogName' ref={dogName}/>
                    <button className='btn' onClick={addDog}>Add Dog</button>
                </div>
                <Dogs dogs={state.dogs} dispatch={dispatch}/>
            </div>
        </div>
    );
};

export {AnimalsPage};