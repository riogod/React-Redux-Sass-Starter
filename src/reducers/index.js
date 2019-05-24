// This will can combine one or more Reducer functions and export it through Redux's combineReducer helper.
import { combineReducers } from "redux";

import count from "./counter";
import main_state from "./mainstate";


export default combineReducers({ count, main_state });


