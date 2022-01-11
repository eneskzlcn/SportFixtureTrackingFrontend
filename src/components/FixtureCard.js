import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteFixture } from "../redux/actions/fixtureActions";
function FixtureCard(props){

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteFixture(props.fixture.fixtureId))
        window.location.replace('/fixtures');
    }
    const formatDate = () =>{
        const date = props.fixture.fixtureDate.substring(0,10).split('-');
        var formattedDate = "";
        for(let i = date.length-1; i >= 0; i--){
            formattedDate += date[i] + '.';
        }
        formattedDate = formattedDate.substring(0,formattedDate.length-1);
        return formattedDate;
    }
    const formatFooterDate = ()=>{
        const date = new Date(props.fixture.fixtureDate);
        var formattedDate = "";
        const now = new Date();
        const isPastDate = (date.getTime() < now.getTime()) ? true : false;
        const difference = (!isPastDate)? (date.getTime()-now.getTime()):(now.getTime()-date.getTime());
        const differenceAsDay = Number.parseInt(difference / (1000 * 3600 * 24));
        if(differenceAsDay === 0) formattedDate = "Today";
        else if(isPastDate) formattedDate = differenceAsDay + " day ago";
        else formattedDate = "After "+ differenceAsDay + " days"
        if((isPastDate || differenceAsDay === 0))
            return (
                (
                <div className="form-inline">
                    <p>{formattedDate}</p>
                    <Button style={{"backgroundColor":"transparent","border":"none","color":"yellowgreen"}} onClick={()=>window.location.replace('/fixtures/'+props.fixture.fixtureId+'/complete')}>Finish</Button>
                </div>
                )
            )
        return formattedDate;
    }
    return(
        <Card className="text-center" style={{"backgroundColor":"#272727","color":"aliceblue","marginLeft":"10px","marginBottom":"10px"}}>
            <Card.Header>{formatDate()}</Card.Header>
            <Card.Body>
                {
                    (props.fixture.homeTeam && props.fixture.awayTeam)? (
                        <Card.Title>{props.fixture.homeTeam.teamName} - {props.fixture.awayTeam.teamName}</Card.Title>
                        ) : (<></>)
                }
                
                <Card.Text className="text-muted">
                    {props.fixture.fixtureHome}
                </Card.Text>
                <Button style={{"backgroundColor":"transparent","border":"none","color":"brown"}} onClick={()=>handleDelete()}>
                    <FontAwesomeIcon icon= {faTrashAlt} ></FontAwesomeIcon>
                </Button>
            </Card.Body>
            <Card.Footer className="text-muted">{formatFooterDate()}</Card.Footer>
        </Card>
    );
}

export default FixtureCard;