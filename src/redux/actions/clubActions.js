import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";

export const getClubs = () => async(dispatch) => {
        const clubs = await API.get('/Clubs').then(r => r.data);
        dispatch({
            type:ActionTypes.GET_CLUBS,
            payload: clubs
        });
};
    
