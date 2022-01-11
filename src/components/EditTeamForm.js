import React, { useState } from "react";
import { Form ,Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClubs } from "../redux/actions/clubActions";
import { getSports } from "../redux/actions/sportActions";
import { getAlert } from "../redux/actions/alertActions";
import { AlertTypes } from "../redux/contants/alertTypes";
import { useParams } from "react-router-dom";
import { getTeam, updateTeam } from "../redux/actions/teamActions";


function EditTeamForm(){
    const [editedTeam,setEditedTeam] = useState({
        teamName:"",
        playerCount:0
    });
    const dispatch = useDispatch()
    const clubs = useSelector((state) => state.allClubs.clubs)
    const sports = useSelector((state) => state.allSports.sports)
    const { teamId } = useParams();
    const editingTeam = useSelector((state)=> state.allTeams.selectedTeam)

    useEffect(()=>{
        dispatch(getClubs())
        dispatch(getSports())
        dispatch(getTeam(teamId))
      },[dispatch,teamId]);
    const submit = ()=> {
        console.log(sports)
        console.log(clubs)
        console.log(editingTeam)
        console.log(editedTeam)
        const updatedTeam = {
            teamId:editingTeam.teamId,
            teamName:editingTeam.teamName,
            playerCount:editingTeam.playerCount,
            clubId:editingTeam.clubId,
            sportId:editingTeam.sportId
        }
        if(editedTeam.teamName === "" && editedTeam.playerCount === 0){
            window.location.replace('/teams')
            return;
        }
        
        if(editedTeam.teamName !== "") updatedTeam.teamName = editedTeam.teamName;
        if(editedTeam.playerCount !== 0 && editedTeam.playerCount >= editingTeam.sport.requiredTeamPlayerCount){
            updatedTeam.playerCount = editedTeam.playerCount;
        }

        if(editedTeam.playerCount < editingTeam.sport.requiredTeamPlayerCount){
            dispatch(getAlert({message:"The team at must has player at least "+ editingTeam.sport.requiredTeamPlayerCount+ " for that sport",alertType:AlertTypes.DANGER}))
            return;
        }
        dispatch(updateTeam(teamId,updatedTeam));
        window.location.replace('/teams')
    }

    return(
        <Form className="ms-3">
    
        <Form.Group className="mb-3" controlId="formTeamName" >
            <Form.Label>Club Name</Form.Label>
            <Form.Control type="text" aria-required onChange={(e)=>setEditedTeam({...editedTeam,teamName:e.target.value})} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPlayerCount" >
            <Form.Label>Player Count</Form.Label>
            <Form.Control type="number"  aria-required onChange={(e)=>setEditedTeam({...editedTeam,playerCount:Number.parseInt(e.target.value)})}/>
        </Form.Group>     
        <Form.Group>
            <Form.Label>Sport</Form.Label>
            <Form.Select className="mb-3" value={editingTeam.sportId} disabled>
            {
                sports.map((sport,index)=>{
                    const {sportId,sportName} = sport;
                    return(
                        <option key={sportId} value={sportId}>{sportName}</option>
                    )
                })
            }
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Label>Club</Form.Label>
            <Form.Select className="mb-3" value={editingTeam.clubId} disabled>
            {
                clubs.map((club)=>{
                    const {clubId,clubName} = club;
                    return(
                        <option key={clubId} value={clubId}>{clubName}</option>
                    )
                })
            }
            </Form.Select>
        </Form.Group>  
            <Button variant="info" style={{"color":"white"}} type="button" onClick={()=>submit()}>Create</Button>
            <Button variant="danger" className="ms-3" type="button" onClick={()=>window.location.replace('/teams')}>Cancel</Button> 
        </Form>
        
    );
}

export default EditTeamForm;