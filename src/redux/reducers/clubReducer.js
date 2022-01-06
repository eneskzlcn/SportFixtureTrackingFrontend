import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    clubs : [],
    selectedClub: {},
    errorMessage: ""
}
// made a destructure for action = {type,payload}
export const clubReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_CLUBS:
            return {...state, clubs:payload };
        case ActionTypes.GET_CLUB:
            return {...state, selectedClub: payload};
        case ActionTypes.UPDATE_CLUB:
            return {...state, clubs: payload};
        case ActionTypes.ERROR_UPDATE_CLUB:
            return {...state, errorMessage: payload};
        default:
            return state;
    }
}

