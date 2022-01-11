import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button,Accordion,Container,Col,Row } from 'react-bootstrap';
import { deleteTeam, getTeams } from '../redux/actions/teamActions';
import { getAlert } from '../redux/actions/alertActions';
import { AlertTypes } from '../redux/contants/alertTypes';

function TeamsAccordion(props) {

    const teams = useSelector((state) => state.allTeams.teams)
    const dispatch = useDispatch();
 
    useEffect(()=>{
  
      dispatch(getTeams());
    },[dispatch]);
    
    const handleDelete = (deleteId) =>{
        console.log(deleteId)
        if(window.confirm("Are you sure to delete the team ?")){
            //delete operation
            dispatch(getAlert({message:"DELETING",alertType:AlertTypes.DANGER}))
            dispatch(deleteTeam(deleteId))
            window.location.replace('/teams')
        }
    }
    return ( 
            <Container>
            {teams.map((team) => {
                const {teamId,teamName,club,playerCount} = team
                
                return(
                    <Row key={teamId}>
                        <Col>
                            <Accordion flush>
                                <Accordion.Item eventKey={teamId} >
                                    <Accordion.Header>{teamName}</Accordion.Header>
                                    <Accordion.Body>
                                        <p onClick={()=> {window.location.replace('/clubs/'+club.clubId+'/details')}} style={{"cursor":"pointer"}}>
                                            Club: {club.clubName}
                                        </p> 
                                    
                                        <p>
                                            Player Count: {playerCount}
                                        </p>
                                        <div>
                                            <Button onClick={()=>{window.location.replace('/teams/'+teamId+'/edit')}} style={{"backgroundColor":"transparent","border":"none"}}>
                                                <FontAwesomeIcon icon={faEdit} color='#c6ab19'></FontAwesomeIcon>
                                            </Button> 
                                            <Button style={{"marginLeft":"5px","backgroundColor":"transparent","border":"none"}} onClick={()=> handleDelete(teamId)}>
                                                <FontAwesomeIcon icon={faTrashAlt} color = "#bb3939"></FontAwesomeIcon>
                                            </Button>    
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                );
            })}
            </Container>
       
    );
  }
  
  export default TeamsAccordion;
  