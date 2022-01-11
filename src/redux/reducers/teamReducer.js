import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    teams : [],
    selectedTeam:{}
}

export const teamReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_TEAMS:
            return {...state, teams:payload };
        
        case ActionTypes.DELETE_TEAM:
            return {...state,teams:payload}
        
        case ActionTypes.CREATE_TEAM:
            return {...state,teams:payload}
        
        case ActionTypes.GET_TEAM:
            return {...state,selectedTeam:payload}
        
        case ActionTypes.UPDATE_TEAM:
            return {...state,teams:payload}
        case ActionTypes.GET_TEAMS_WITH_QUERY:
            return {...state,teams:payload}
        default:
            return state;
    }
}

