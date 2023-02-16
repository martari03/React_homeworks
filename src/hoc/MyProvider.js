import {createContext, useReducer} from "react";
import {
    initialCars,
    initialCatAndDog,
    initialUsers,
    myCarReducer,
    myCatAndDogReducer,
    myUserReducer
} from "../reducers";

const MyContext = createContext(null);

const MyProvider = ({children}) => {

    const reducers = {
        userReducer: useReducer(myUserReducer, null, initialUsers),
        carReducer: useReducer(myCarReducer, null, initialCars),
        catAndDogReducer: useReducer(myCatAndDogReducer, null, initialCatAndDog)
    };

    return (
        <MyContext.Provider value={reducers}>
            {children}
        </MyContext.Provider>
    );
};

export {MyProvider, MyContext};