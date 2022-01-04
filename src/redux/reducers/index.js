import { combineReducers } from "redux";
import { clubReducer } from "./clubReducer";

export const reducers = combineReducers({
    allClubs:clubReducer,
});