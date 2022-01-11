import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClubs,deleteClub } from "../redux/actions/clubActions";
import { Accordion, Container, Row, Col, Button} from "react-bootstrap";
import { faEdit,faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ClubsAccordion(){
    const clubs = useSelector((state) => state.allClubs.clubs)
    const dispatch = useDispatch();
    
    useEffect(()=>{
  
      dispatch(getClubs());
    },[dispatch]);
    const handleDelete = (deleteId) =>{
        console.log(deleteId)
        if(window.confirm("Are you sure to delete the club ?")){
            dispatch(deleteClub(deleteId))
            window.location.replace('/clubs')
        }
    }

    return(
        <Container>
            {
            clubs.map((club) => {
            const {clubId,clubName,clubDescription} = club
            return(
                <Row key={clubId}>
                    <Col>
                        <Accordion flush>
                            <Accordion.Item eventKey={clubId} >
                                        <Accordion.Header >{clubName}</Accordion.Header>
                                        <Accordion.Body>
                                            
                                            <p>
                                                Club Description: {clubDescription}
                                            </p>
                                            <div>
                                                <Button onClick={()=>{window.location.replace('/clubs/'+clubId+'/edit')}} style={{"backgroundColor":"transparent","border":"none"}}>
                                                    <FontAwesomeIcon icon={faEdit} color='#c6ab19'></FontAwesomeIcon>
                                                </Button> 
                                                <Button style={{"marginLeft":"5px","backgroundColor":"transparent","border":"none"}} onClick={()=> handleDelete(clubId)}>
                                                    <FontAwesomeIcon icon={faTrashAlt} color = "#bb3939"></FontAwesomeIcon>
                                                </Button>    
                                            </div>
                                        </Accordion.Body>
                                </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            
            );
            })

            }
        </Container>);
}



export default ClubsAccordion;