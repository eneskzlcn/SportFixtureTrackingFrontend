import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    fixtures : [],
}
// made a destructure for action = {type,payload}
export const fixtureReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_FIXTURES:
            return {...state, fixtures:payload };
        default:
            return state;
    }
}

