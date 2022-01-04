import { ClubActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";

export const getClubs = () => async(dispatch) => {
        const clubs = await API.get('/clubs').then(r => r.data);
        dispatch({
            type:ClubActionTypes.GET_CLUBS,
            payload: clubs
        });
};
    
