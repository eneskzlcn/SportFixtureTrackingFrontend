import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    teams : [],
}
// made a destructure for action = {type,payload}
export const teamsReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_TEAMS:
            return {...state, teams:payload };
        default:
            return state;
    }
}

