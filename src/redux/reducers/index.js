import { combineReducers } from "redux";
import { clubReducer } from "./clubReducer";
import { teamReducer } from "./teamReducer";

export const reducers = combineReducers({
    allClubs:clubReducer,
    allTeams:teamReducer
});