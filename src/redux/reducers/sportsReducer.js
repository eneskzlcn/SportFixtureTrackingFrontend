import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    sports : [],
}
// made a destructure for action = {type,payload}
export const sportsReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_SPORTS:
            return {...state, sports:payload };
        default:
            return state;
    }
}

