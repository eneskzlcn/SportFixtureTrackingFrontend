import { ClubActionTypes } from "../contants/actionTypes";

const initialState = {
    clubs : [],
}
// made a destructure for action = {type,payload}
export const clubReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ClubActionTypes.GET_CLUBS:
            return {...state, clubs:payload };
        default:
            return state;
    }
}

