import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer, postReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    cars: carReducer
});

const setStore = () => configureStore({
    reducer: rootReducer
});

export {setStore};