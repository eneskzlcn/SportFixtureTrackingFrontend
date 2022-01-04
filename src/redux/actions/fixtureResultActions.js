import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";

export const getFixtureResults = () => async(dispatch) => {
        const fixtureResults = await API.get('/FixtureResults').then(r => r.data);
        dispatch({
            type: ActionTypes.GET_FIXTURE_RESULTS,
            payload: fixtureResults
        });
};
    
