import { combineReducers } from "redux";
import { clubsReducer } from "./clubsReducer";
import { sportsReducer } from "./sportsReducer";
import { teamsReducer } from "./teamsReducer";

export const reducers = combineReducers({
    allClubs:clubsReducer,
    allTeams:teamsReducer,
    allSports:sportsReducer,
});