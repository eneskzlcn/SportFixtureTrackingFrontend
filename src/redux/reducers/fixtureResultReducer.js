import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    fixtureResults : [],
}
// made a destructure for action = {type,payload}
export const fixtureResultReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_FIXTURE_RESULTS:
            return {...state, fixtureResults :payload };
        default:
            return state;
    }
}

