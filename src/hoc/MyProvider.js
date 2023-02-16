import {createContext, useReducer} from "react";

import {initialAnimals, initialCars, initialUsers, myAnimalsReducer, myCarReducer, myUserReducer} from "../reducers";

const MyContext = createContext(null);

const MyProvider = ({children}) => {

    const reducers = {
        userReducer: useReducer(myUserReducer, null, initialUsers),
        carReducer: useReducer(myCarReducer, null, initialCars),
        animalsReducer: useReducer(myAnimalsReducer, null, initialAnimals)
    };

    return (
        <MyContext.Provider value={reducers}>
            {children}
        </MyContext.Provider>
    );
};

export {MyProvider, MyContext};