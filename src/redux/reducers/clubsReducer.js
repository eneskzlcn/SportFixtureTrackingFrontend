import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    clubs : [],
}
// made a destructure for action = {type,payload}
export const clubsReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_CLUBS:
            return {...state, clubs:payload };
        default:
            return state;
    }
}

