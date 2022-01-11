import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    sports : [],
}
// made a destructure for action = {type,payload}
export const sportReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_SPORTS:
            return {...state, sports:payload };
        case ActionTypes.DELETE_SPORT:
            return {...state,sports:payload};
        default:
            return state;
    }
}

