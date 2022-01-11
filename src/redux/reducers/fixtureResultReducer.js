import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    fixtureResults : [],
    errorMessage:""
}
// made a destructure for action = {type,payload}
export const fixtureResultReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_FIXTURE_RESULTS:
            return {...state, fixtureResults :payload };
        case ActionTypes.CREATE_FIXTURE_RESULT:
            return {...state,fixtureResults:payload};
        case ActionTypes.ERROR_CREATE_FIXTURE_RESULT:
            return {...state,errorMessage:payload}
        default:
            return state;
    }
}

