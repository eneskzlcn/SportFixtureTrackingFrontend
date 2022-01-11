import { ActionTypes } from "../contants/actionTypes";
import API from "../../apis/sportFixtureTrackingApi";
import { StatusCodes } from "http-status-codes";
export const getClubs = () => async(dispatch) => {
        //const clubs = await API.get('/Clubs').then(r => r.data);
        const clubs = await API.GetClubs()
        dispatch({
            type: ActionTypes.GET_CLUBS,
            payload: clubs
        });
};
export const getClub = (id) => async(dispatch) => {
    const club = await API.GetClub(id);
    dispatch({
        type: ActionTypes.GET_CLUB,
        payload: club
    });
};
export const createClub = (clubName,clubDescription) => async(dispatch) => {
    const club = await API.CreateClub(clubName,clubDescription);
    dispatch({
        type: ActionTypes.GET_CLUB,
        payload: club
    });
};
export const deleteClub = (clubId) => async(dispatch) => {
    const status = await API.DeleteClub(clubId);
    if(status === StatusCodes.OK)
    {
        const clubs = await API.GetClubs();
        dispatch({
            type: ActionTypes.DELETE_CLUB,
            payload: clubs
        });
    }
    else{
        dispatch({
            type: ActionTypes.ERROR_DELETE_CLUB,
            payload: "Error on deleting club"
        });
    }
    
};

export const updateClub = (id, updatedClub) => async(dispatch) => {
    //api returns success code when succesfully updated. So go over it.
    const status = await API.UpdateClub(id ,updatedClub).then(r => r.status);
    if(status === StatusCodes.OK){
        const clubs = await API.get('/Clubs').then(r => r.data);
        dispatch({  
            type: ActionTypes.GET_CLUB,
            payload: clubs
        });
    }else{
        dispatch({  
            type: ActionTypes.ERROR_UPDATE_CLUB,
            payload: "Error occured when updating the club."
        });
    }
};

    
