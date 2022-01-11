import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";

export const getSports = () => async(dispatch) => {
        const sports = await API.GetSports();
        dispatch({
            type:ActionTypes.GET_SPORTS,
            payload: sports
        });
};
    
export const deleteSport = (sportId) => async(dispatch) => {
    await API.DeleteSport(sportId);
    const sports = await API.GetSports();
    dispatch({
        type:ActionTypes.DELETE_SPORT,
        payload: sports
    });
};