import { ActionTypes } from "../contants/actionTypes";

const initialState = {
    fixtures : [],
    errorMessage:{},
    selectedFixture:{}
}
export const fixtureReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_FIXTURES:
            return {...state, fixtures:payload };
        case ActionTypes.DELETE_FIXTURE:
            return {...state,fixtures:payload}
        case ActionTypes.CREATE_FIXTURE:
            return {...state,fixtures:payload}
        case ActionTypes.ERROR_DELETE_CLUB:
            return {...state,errorMessage:payload}
        case ActionTypes.ERROR_CREATE_FIXTURE:
            return {...state,errorMessage:payload}
        case ActionTypes.GET_FIXTURE:
            return {...state,selectedFixture:payload}
        case ActionTypes.UPDATE_FIXTURE:
            return {...state,fixtures:payload}
        case ActionTypes.ERROR_UPDATE_FIXTURE:
                return {...state,errorMessage:payload}
        default:
            return state;
    }
}

