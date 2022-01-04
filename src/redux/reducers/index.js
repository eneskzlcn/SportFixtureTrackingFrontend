import { combineReducers } from "redux";
import { clubReducer } from "./clubReducer";
import { sportReducer } from "./sportReducer";
import { teamReducer } from "./teamReducer";

export const reducers = combineReducers({
    allClubs:clubReducer,
    allTeams:teamReducer,
    allSports:sportReducer,
});