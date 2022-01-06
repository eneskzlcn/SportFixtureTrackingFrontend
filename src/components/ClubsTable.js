import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getClubs } from '../redux/actions/clubActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faInfoCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function ClubsTable(props) {

    const clubs = useSelector((state) => state.allClubs.clubs)
    const dispatch = useDispatch();
    
    useEffect(()=>{
  
      dispatch(getClubs());
    },[dispatch]);
  
    const initHeaders = () => {
        
        return(  
            <tr>
                <th>Club Name</th>
                <th>Club Description</th>
                <th></th>
            </tr>
        );
    }
    
    const initBody = clubs.map((club) => {
            const {clubId,clubName,clubDescription} = club
            return(
                <tr key={clubId}>
                    <td >{clubName}</td>
                    <td>{clubDescription}</td>
                    <td> <a href='/'>
                        
                        <FontAwesomeIcon icon={faEdit} color='#c6ab19'></FontAwesomeIcon>
                    </a> 
                    <a href={'/clubs/'+clubId+'/details'} style={{"marginLeft":"15px"}}>
                       
                        <FontAwesomeIcon icon={faInfoCircle} color='#07cdfa'></FontAwesomeIcon>
                    </a> 
                    <a href='/'style={{"marginLeft":"15px"}}>
                        <FontAwesomeIcon icon={faTrashAlt} color = "#bb3939"></FontAwesomeIcon>
                    </a></td>
                </tr>
            );
        })
        
    return ( 
            <Table striped bordered hover variant="dark">
            <thead>     
                {initHeaders()}
            </thead>
            <tbody>
                {initBody}
                
            </tbody>
        </Table>
    
    );
  }
  
  export default ClubsTable;
  