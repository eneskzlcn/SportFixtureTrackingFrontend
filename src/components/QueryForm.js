import { useEffect, useState } from "react";
import { Card, Form , Button, ListGroup} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../redux/actions/sportActions";
import { getTeamsByQuery } from "../redux/actions/teamActions";
import { AlertTypes } from "../redux/contants/alertTypes";


function QueryForm(){
    const [queryParam,setQueryParam] = useState(-1);
    const sports = useSelector((state)=> state.allSports.sports)
    const queriedTeams = useSelector((state) => state.allTeams.teams)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getSports())
    },[dispatch])
    const search = ()=>{
        if(queryParam === -1)
            return;
        dispatch(getTeamsByQuery({name:"sportId",value:queryParam}))
        console.log(queryParam);
    }
    return(
        <Card className="text-center" style={{"backgroundColor":"transparent","color":"black","marginLeft":"10px","marginBottom":"10px"}}>
            <Card.Header className="text-danger">Find Your Best Team</Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Sport</Form.Label>
                        <Form.Select onChange={(e)=>setQueryParam(Number.parseInt(e.target.value))}>
                            <option value={-1}>Choose A Sport</option>
                            {sports.map((sport)=>{
                                const {sportId,sportName} = sport;
                                return(
                                    <option value={sportId} key={sportId}>{sportName}</option>
                                )
                            })

                            }
                        </Form.Select>
                    </Form.Group>
                </Form>
                {
                    (!queriedTeams || queriedTeams.length === 0) ? <></> : 
                    <ListGroup className="text-danger"> Query Results
                        {
                            queriedTeams.map((team) => {
                                const {teamId,teamName} = team;
                                return(
                                    <ListGroup.Item key={teamId} className="mt-1">{teamName}</ListGroup.Item>
                                );
                                
                            })
                        }
                    </ListGroup>
                }
                <Button variant={AlertTypes.INFO} className="mb-3 mt-3" style={{color:"white"}} onClick={()=>search()}>Search</Button>
            </Card.Body>
        </Card>
    );
}

export default QueryForm;