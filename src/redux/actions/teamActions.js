import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";

export const getTeams = () => async(dispatch) => {
        const teams = await API.GetTeams();
        dispatch({
            type:ActionTypes.GET_TEAMS,
            payload: teams
        });
};
export const getTeamsByQuery = (queryParam) => async(dispatch) => {
    const teams = await API.GetTeamsWithQueryParam(queryParam);
    dispatch({
        type:ActionTypes.GET_TEAMS_WITH_QUERY,
        payload: teams
    });
};
export const getTeam = (teamId) => async(dispatch) => {
    const team = await API.GetTeam(teamId);
    dispatch({
        type:ActionTypes.GET_TEAM,
        payload: team
    });
};
export const deleteTeam = (teamId) => async(dispatch) => {
    await API.DeleteTeam(teamId);
    const teams = await API.GetTeams();
    dispatch({
        type:ActionTypes.DELETE_TEAM,
        payload: teams
    });
};

export const createTeam = (team) => async(dispatch) => {
    await API.CreateTeam(team);
    const teams = await API.GetTeams();
    dispatch({
        type:ActionTypes.CREATE_TEAM,
        payload: teams
    });
};
export const updateTeam = (teamId,updatedTeam) => async(dispatch) => {
    await API.UpdateTeam(teamId,updatedTeam);
    const teams = await API.GetTeams();
    dispatch({
        type:ActionTypes.UPDATE_TEAM,
        payload: teams
    });
};
    
