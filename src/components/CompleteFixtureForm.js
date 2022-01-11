import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFixture, updateFixture } from "../redux/actions/fixtureActions";
import { Form } from "react-bootstrap";
import { AlertTypes } from "../redux/contants/alertTypes";
import { getAlert } from "../redux/actions/alertActions";
import { createFixtureResult } from "../redux/actions/fixtureResultActions";
//Fixture in Y is N olarak set olacak
//Fixture result create edilecek.
// "resultId": 0,
//   "fixtureId": 0,
//   "winnerTeamId": 0,

//   "homeTeamScore": 0,
//   "awayTeamScore": 0,

function CompleteFixtureForm(){
    const [complete,setComplete] = useState({
        homeTeamScore:-1,
        awayTeamScore:-1
    });

    const {fixtureId} = useParams();
    const dispatch = useDispatch();
    const selectedFixture = useSelector((state)=> state.allFixtures.selectedFixture)
    useEffect(()=>{
        dispatch(getFixture(fixtureId));
    },[dispatch,fixtureId])

    const submit = ()=>{
        if(complete.homeTeamScore === -1 || complete.awayTeamScore === -1){
            dispatch(getAlert({message:"You can not leave scores blank",alertType:AlertTypes.DANGER}))
            return;
        }
        const winnerTeamId = (complete.homeTeamScore >= complete.awayTeamScore) ? selectedFixture.homeTeamId:selectedFixture.awayTeamId;
        const updatedFixture = {...selectedFixture,isFinished:"Y"}
        const fixtureResult = {
            fixtureId:Number.parseInt(fixtureId),
            homeTeamScore:complete.homeTeamScore,
            awayTeamScore:complete.awayTeamScore,
            winnerTeamId: winnerTeamId
        }
        dispatch(updateFixture(fixtureId,updatedFixture));
        dispatch(createFixtureResult(fixtureResult));
        window.location.replace('/Fixtures');
        console.log("Fixture Result",fixtureResult);
        console.log("Fixture",updatedFixture);
    }
    return(
        <>
            <Form className="ms-3">
                <Form.Group className="mb-3" controlId="formHomeTeamScore">
                    {
                        (selectedFixture.homeTeam) ? <Form.Label>{selectedFixture.homeTeam.teamName} Score</Form.Label> : <Form.Label>Home Team Score</Form.Label> }
                   
                    <Form.Control type="number" aria-required onChange={(e)=>setComplete({...complete,homeTeamScore:Number.parseInt(e.target.value)})}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAwayTeamScore">
                    {(selectedFixture.awayTeam) ? <Form.Label>{selectedFixture.awayTeam.teamName} Score</Form.Label> :<Form.Label>Away Team Score</Form.Label>}
                    <Form.Control type="number" aria-required onChange={(e)=>setComplete({...complete,awayTeamScore:Number.parseInt(e.target.value)})}></Form.Control>
                </Form.Group>
            </Form>
            <Button variant={AlertTypes.INFO} onClick={()=>submit()} style={{"color":"white"}} className="ms-3"> Complete</Button>
            <Button variant={AlertTypes.DANGER} onClick={()=>window.location.replace('/fixtures')} style={{"color":"white"}} className="ms-3"> Cancel</Button>

        </>
        );
}

export default CompleteFixtureForm;