import {combineReducers} from "redux";
import popupReducer from "./popupReducer";

const rootReducer = () => combineReducers({
    popupReducer
});

export default rootReducer