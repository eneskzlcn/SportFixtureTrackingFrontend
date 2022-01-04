import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";

export const getFixtures = () => async(dispatch) => {
        const fixtures = await API.get('/Fixtures').then(r => r.data);
        dispatch({
            type: ActionTypes.GET_FIXTURES,
            payload: fixtures
        });
};
    
