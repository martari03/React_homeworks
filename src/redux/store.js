import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices";

const rootReducer = combineReducers({
    cars: carReducer
});

const setStore = () => configureStore({
    reducer: rootReducer
});

export {setStore};