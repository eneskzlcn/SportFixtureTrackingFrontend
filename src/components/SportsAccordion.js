import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { Accordion, Container, Row, Col, Button} from "react-bootstrap";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getSports , deleteSport} from "../redux/actions/sportActions";

function SportsAccordion(){
    const sports = useSelector((state) => state.allSports.sports)
    const dispatch = useDispatch();
    
    useEffect(()=>{
  
      dispatch(getSports());
    },[dispatch]);
    const handleDelete = (deleteId) =>{
        console.log(deleteId)
        if(window.confirm("Are you sure to delete the club ?")){
            dispatch(deleteSport(deleteId))
            window.location.replace('/sports')
        }
    }

    return(
        <Container>
            {
            sports.map((sport) => {
            const {sportId,sportName,sportDescription,requiredTeamPlayerCount } = sport
            return(
                <Row key={sportId}>
                    <Col>
                        <Accordion flush>
                            <Accordion.Item eventKey={sportId} >
                                        <Accordion.Header >{sportName}</Accordion.Header>
                                        <Accordion.Body>
                                            
                                            <p>
                                                Sport Description: {sportDescription}
                                            </p>
                                            <p>
                                                Minimum Required Player To Play: {requiredTeamPlayerCount}
                                            </p>
                                            <div>
                                                <Button style={{"marginLeft":"5px","backgroundColor":"transparent","border":"none"}} onClick={()=> handleDelete(sportId)}>
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



export default SportsAccordion;