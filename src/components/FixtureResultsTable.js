import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getFixtureResults } from "../redux/actions/fixtureResultActions";

// "homeTeamScore": 1,
// "awayTeamScore": 2,
// fixture.fixtureDate
// fixture.fixtureHome"
// fixture.awayTeam.teamName
// fixture.homeTeam.teamName
// winnerTeam.teamName
// winnerTeam.sport.sportName
function FixtureResultsTable(){
    const fixtureResults = useSelector((state) => state.allFixtureResults.fixtureResults)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getFixtureResults())
    },[dispatch])

    const formatDate = (fixtureDate)=>{
        const date = fixtureDate.substring(0,10).split('-');
        var formattedDate = "";
        for(let i = date.length-1; i >= 0; i--){
            formattedDate += date[i] + '.';
        }
        formattedDate = formattedDate.substring(0,formattedDate.length-1);
        return formattedDate;
    }
    return(
        <Table striped bordered hover variant="light">
                <thead>    
                    <tr>
                        <th>Fixture Date</th>
                        <th>Fixture Home</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                        <th>Home Team Score</th>
                        <th>Away Team Score </th>
                        <th>Winner Team</th>
                    </tr> 
                    
                </thead>
                <tbody>
                   { fixtureResults.map((fixtureResult) => {
                       const {resultId,homeTeamScore,awayTeamScore,fixture,winnerTeam} = fixtureResult;
                       const {homeTeam,awayTeam,fixtureDate,fixtureHome} = fixture;
                       if(!fixture || !winnerTeam || !homeTeam || !awayTeam)
                        return(
                            <tr key={resultId}></tr>
                        )
                        else{
                            return(
                                <tr key={resultId}>
                                    <td>{formatDate(fixtureDate)}</td>    
                                    <td>{fixtureHome}</td> 
                                    <td>{homeTeam.teamName}</td> 
                                    <td>{awayTeam.teamName}</td> 
                                    <td>{homeTeamScore}</td>
                                    <td>{awayTeamScore}</td> 
                                    <td>{winnerTeam.teamName}</td>
                                </tr>
                            )
                        }
                   })
                    
                   }
                </tbody>
            
        </Table>
        )
}


export default FixtureResultsTable;
