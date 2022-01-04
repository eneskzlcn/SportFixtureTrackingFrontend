import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";

export const getTeams = () => async(dispatch) => {
        const teams = await API.get('/Teams').then(r => r.data);
        dispatch({
            type:ActionTypes.GET_TEAMS,
            payload: teams
        });
};
    
