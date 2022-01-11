import { combineReducers } from "redux";
import { clubReducer } from "./clubReducer";
import { fixtureReducer } from "./fixtureReducer";
import { fixtureResultReducer } from "./fixtureResultReducer";
import { sportReducer } from "./sportReducer";
import { teamReducer } from "./teamReducer";
import { alertReducer } from "./alertReducer";

export const reducers = combineReducers({
    allClubs:clubReducer,
    allTeams:teamReducer,
    allSports:sportReducer,
    allFixtures:fixtureReducer,
    allFixtureResults:fixtureResultReducer,
    alert:alertReducer,
});