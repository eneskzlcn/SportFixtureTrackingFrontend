import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";
import { StatusCodes } from "http-status-codes";

export const getFixtures = () => async(dispatch) => {
        const fixtures = await API.GetFixtures();
        dispatch({
            type: ActionTypes.GET_FIXTURES,
            payload: fixtures
        });
};
export const deleteFixture = (fixtureId) => async(dispatch) => {
    const status = await API.DeleteFixture(fixtureId);
    if(status === StatusCodes.OK)
    {
        const fixtures = await API.GetFixtures();
        dispatch({
            type: ActionTypes.DELETE_FIXTURE,
            payload: fixtures
        });
    }
    else{
        dispatch({
            type: ActionTypes.ERROR_DELETE_FIXTURE,
            payload: "Error on deleting fixture"
        });
    }
    
};
export const createFixture = (fixture) => async(dispatch) => {
    const status = await API.CreateFixture(fixture);
    if(status === StatusCodes.OK)
    {
        const fixtures = await API.GetFixtures();
        dispatch({
            type: ActionTypes.CREATE_FIXTURE,
            payload: fixtures
        });
    }
    else{
        dispatch({
            type: ActionTypes.ERROR_CREATE_FIXTURE,
            payload: "Error creating new fixture"
        });
    }
    
};
export const getFixture = (fixtureId) => async(dispatch) => {
    const fixture = await API.GetFixture(fixtureId);

        dispatch({
            type: ActionTypes.GET_FIXTURE,
            payload: fixture
        });
};

export const updateFixture = (fixtureId,fixture) => async(dispatch) => {
    const status = await API.UpdateFixture(fixtureId,fixture);
    if(status === StatusCodes.OK)
    {
        const fixtures = await API.GetFixtures();
        dispatch({
            type: ActionTypes.UPDATE_FIXTURE,
            payload: fixtures
        });
    }
    else{
        dispatch({
            type: ActionTypes.ERROR_UPDATE_FIXTURE,
            payload: "Error updating fixture"
        });
    }
    
};
    
