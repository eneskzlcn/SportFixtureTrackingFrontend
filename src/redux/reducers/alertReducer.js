import { ActionTypes } from "../contants/actionTypes";
import { AlertTypes } from "../contants/alertTypes";

const initialState = {
    message :"",
    alertType: AlertTypes.INFO,
    show:false,
}
// made a destructure for action = {type,payload}
export const alertReducer = (state = initialState, {type, payload}) =>{
    switch(type){
        case ActionTypes.GET_ALERT:
            return {...state, message:payload.message,alertType:payload.alertType,show:true};
        case ActionTypes.STOP_ALERT:
            return {...state, message:payload.message,alertType:payload.alertType,show:false}
        default:
            return state;
    }
}

