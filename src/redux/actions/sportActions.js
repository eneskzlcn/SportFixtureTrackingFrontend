import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";

export const getSports = () => async(dispatch) => {
        const sports = await API.get('/Sports').then(r => r.data);
        dispatch({
            type:ActionTypes.GET_SPORTS,
            payload: sports
        });
};
    
