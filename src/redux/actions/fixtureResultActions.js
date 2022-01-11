import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";
import { StatusCodes } from "http-status-codes";

export const getFixtureResults = () => async(dispatch) => {
        const fixtureResults = await API.GetFixtureResults()
        dispatch({
            type: ActionTypes.GET_FIXTURE_RESULTS,
            payload: fixtureResults
        });
};
export const createFixtureResult = (fixtureResult) => async(dispatch) => {
    const status = await API.CreateFixtureResult(fixtureResult);
    if(status === StatusCodes.OK)
    {
        const fixtureResults = await API.GetFixtureResults()
        dispatch({
            type: ActionTypes.CREATE_FIXTURE_RESULT,
            payload: fixtureResults
        });
    }
    else{
        dispatch({
            type: ActionTypes.ERROR_CREATE_FIXTURE_RESULT,
            payload: "Error when creating new fixture result"
        });
    }
    
};

    
