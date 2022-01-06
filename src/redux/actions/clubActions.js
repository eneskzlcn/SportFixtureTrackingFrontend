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

export const updateClub = (id, updatedClub) => async(dispatch) => {
    //api returns success code when succesfully updated. So go over it.
    const status = await API.put('/Clubs/'+id ,updatedClub).then(r => r.status);
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

    
