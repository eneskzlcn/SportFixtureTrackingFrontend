import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getClubs } from "../redux/actions/clubActions";
import { getSports } from "../redux/actions/sportActions";
import { getAlert } from "../redux/actions/alertActions";
import { AlertTypes } from "../redux/contants/alertTypes";
import { createTeam } from "../redux/actions/teamActions";
// "teamId": 0,
// "clubId": 0,
// "sportId": 0,
// "teamName": "string",
// "playerCount": 0,
function CreateTeamForm(){
    const [newTeam,setNewTeam] = useState({});
    const dispatch = useDispatch()
    const clubs = useSelector((state) => state.allClubs.clubs)
    const sports = useSelector((state) => state.allSports.sports)

    useEffect(()=>{
        dispatch(getClubs())
        dispatch(getSports())
      },[dispatch]);
    const submit = ()=> {
        
        const chosenSport = sports.find(sport=>newTeam.sportId === sport.sportId);
        if(!chosenSport){
            dispatch(getAlert({message:"A Valid Sport Type Must Chosen",alertType:AlertTypes.DANGER}))
            return;
        }
        
        if(newTeam.playerCount < chosenSport.requiredTeamPlayerCount){
            dispatch(getAlert({message:"The team at must has player at least for required count of the sport",alertType:AlertTypes.DANGER}))
            return;
        }
        if(!newTeam.teamName || newTeam.teamName ==="")
        {
            dispatch(getAlert({message:"You should enter a name for team",alertType:AlertTypes.DANGER}))
            return;
        }
        dispatch(createTeam(newTeam));
        console.log(newTeam)
        window.location.replace('/teams')
    }
        return(
            <Form className="ms-3">
        
            <Form.Group className="mb-3" controlId="formTeamName" >
                <Form.Label>Club Name</Form.Label>
                <Form.Control type="text" placeholder="Enter team name"aria-required onChange={(e)=>setNewTeam({...newTeam,teamName:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPlayerCount" >
                <Form.Label>Player Count</Form.Label>
                <Form.Control type="number" placeholder="Enter a player count for team"aria-required onChange={(e)=>setNewTeam({...newTeam,playerCount:Number.parseInt(e.target.value)})}/>
            </Form.Group>     
            <Form.Group>
                <Form.Label>Sport</Form.Label>
                <Form.Select className="mb-3" onChange={(e)=>setNewTeam({...newTeam,sportId:Number.parseInt(e.target.value)})}>
                    <option value={-1}>Choose Club </option>
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
                <Form.Select className="mb-3" onChange={(e)=>setNewTeam({...newTeam,clubId:Number.parseInt(e.target.value)})} >
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
                <Button variant="danger" className="ms-3" type="button" onClick={()=>window.location.replace('/clubs')}>Cancel</Button> 
            </Form>
            
        );
}

export default CreateTeamForm;