import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    clubs : [],
    selectedClub: {}
}
// made a destructure for action = {type,payload}
export const clubReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_CLUBS:
            return {...state, clubs:payload };
        case ActionTypes.GET_CLUB:
            return {...state, selectedClub: payload};
        default:
            return state;
    }
}

