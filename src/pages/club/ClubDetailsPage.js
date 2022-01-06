import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getClub } from "../../redux/actions/clubActions";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
function ClubDetailsPage(){
    const club = useSelector((state) => state.allClubs.selectedClub)
    const dispatch = useDispatch();
    const clubId = window.location.pathname.split('/')[2]
    useEffect(()=>{
  
        dispatch(getClub(clubId));
      },[dispatch,clubId]);
    
    const showTeams = () => {
        const teams = club.teams
        if(teams){
            const teamList = teams.map((team) => {
                return ( <ListGroup.Item key={team.teamId}>{team.teamName}</ListGroup.Item>);
            })
            return (
                <Form.Group className="mb-3" key={club.clubId}>
                    <ListGroup>
                       {teamList}
                    </ListGroup>
                </Form.Group>
               
            );
        }
        return(<></>)
    }

    return(
        <Form>
            <Form.Group className="mb-3" controlId="formClubName">
                <Form.Label>Club Name</Form.Label>
                <Form.Control type="text" disabled placeholder={club.clubName}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formClubDescription">
                <Form.Label>Club Description</Form.Label>
                <Form.Control type="text" disabled placeholder={club.clubDescription}/>
            </Form.Group>
           
            {showTeams()}
                
           
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default ClubDetailsPage;