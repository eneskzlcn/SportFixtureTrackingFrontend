import { Form,Button } from "react-bootstrap";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { getTeams } from "../redux/actions/teamActions";
import { getAlert  } from "../redux/actions/alertActions";
import { AlertTypes } from "../redux/contants/alertTypes";
import { createFixture } from "../redux/actions/fixtureActions";

function CreateFixtureForm(){
    const [newFixture,setNewFixture] = useState({
        isFinished:"N",
        homeTeamId:-1,
        awayTeamId:-1,
        fixtureDate:"",
        fixtureHome:""
    });
    const dispatch = useDispatch()
    const teams = useSelector((state) => state.allTeams.teams)

    useEffect(()=>{
        dispatch(getTeams())
    },[dispatch])
    const submit = () =>{
        const {homeTeamId,awayTeamId,fixtureDate,fixtureHome} = newFixture;
        var date = new Date(fixtureDate);
        var now = new Date();
        if(fixtureDate === ""){
            dispatch(getAlert({message:"You can not leave fixture date blank",alertType:AlertTypes.DANGER}))
            return; 
        }
        if(now.getTime() - date.getTime() > 0){
            dispatch(getAlert({message:"You can not create a fixture in past time",alertType:AlertTypes.DANGER}))
            return;
        }
        if(fixtureHome === "") {
            dispatch(getAlert({message:"You can not leave blank fixture home",alertType:AlertTypes.DANGER}))
            return;
        }
        if(homeTeamId === awayTeamId){
            dispatch(getAlert({message:"Away team and home team can not be the same team",alertType:AlertTypes.DANGER}))
            return; 
        }
        const homeTeam = teams.find(r => r.teamId === homeTeamId);
        const awayTeam = teams.find(r=> r.teamId === awayTeamId);

        if(homeTeam.sportId !== awayTeam.sportId){
            dispatch(getAlert({message:"Teams from different sport types,can not match",alertType:AlertTypes.DANGER}))
            return;
        }
        if(homeTeam.clubId === awayTeam.clubId){
            dispatch(getAlert({message:"Teams in same club, can not match",alertType:AlertTypes.DANGER}))
            return;
        }
        dispatch(createFixture(newFixture));
        window.location.replace('/fixtures');      
    }

    return(
        <Form className="ms-3 mt-3">
        
        <Form.Group className="mb-3" controlId="formFixtureDate" >
            <Form.Label>Fixture Date</Form.Label>
            <Form.Control type="date" placeholder="Enter a date"aria-required onChange={(e)=>setNewFixture({...newFixture,fixtureDate:e.target.value})} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formFixtureHome" >
            <Form.Label>Fixture Home</Form.Label>
            <Form.Control type="text" placeholder="Enter a fixture home"aria-required onChange={(e)=>setNewFixture({...newFixture,fixtureHome:e.target.value})}/>
        </Form.Group>  
        <Form.Group>
            <Form.Label>Is Finished</Form.Label>
            <Form.Select className="mb-3" value={'N'} onChange={(e)=>setNewFixture({...newFixture,isFinished:e.target.value})}>
                <option value={'Y'}>Yes</option>
                <option value={'N'}>No</option>
            </Form.Select>
        </Form.Group>
        <Form.Group>
            <Form.Label>Home Team</Form.Label>
            <Form.Select className="mb-3" onChange={(e)=>setNewFixture({...newFixture,homeTeamId:Number.parseInt(e.target.value)})} >
                <option value={-1}>Pick A Home Team</option>
            {
                teams.map((team)=>{
                    const {teamId,teamName} = team;
                    return(
                        <option key={teamId} value={teamId}>{teamName}</option>
                    )
                })
            }
            </Form.Select>
        </Form.Group>  
        <Form.Group>
            <Form.Label>Away Team</Form.Label>
            <Form.Select className="mb-3" onChange={(e)=>setNewFixture({...newFixture,awayTeamId:Number.parseInt(e.target.value)})} >
            <option value={-1}>Pick A Away Team</option>
            {
                teams.map((team)=>{
                    const {teamId,teamName} = team;
                    return(
                        <option key={teamId} value={teamId}>{teamName}</option>
                    )
                })
            }
            </Form.Select>
        </Form.Group>  
            <Button variant="info" style={{"color":"white"}} type="button" onClick={()=>submit()}>Create</Button>
            <Button variant="danger" className="ms-3" type="button" onClick={()=>window.location.replace('/fixtures')}>Cancel</Button> 
        </Form>
    );
}
export default CreateFixtureForm;