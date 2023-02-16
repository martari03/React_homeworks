import {useContext} from "react";
import {MyContext} from "../hoc";

const useMyAppReducer = (value) => value(useContext(MyContext));

export {useMyAppReducer};