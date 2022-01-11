import { ActionTypes } from "../contants/actionTypes";
import { AlertTypes } from "../contants/alertTypes";

export const getAlert = (alert) => async(dispatch) => {
        
        dispatch({
            type: ActionTypes.GET_ALERT,
            payload: alert
        });
};
export const stopAlert = () => async(dispatch) => {
    const alert = {message:"",alertType:AlertTypes.INFO}
    dispatch({
        type: ActionTypes.STOP_ALERT,
        payload: alert
    });
};