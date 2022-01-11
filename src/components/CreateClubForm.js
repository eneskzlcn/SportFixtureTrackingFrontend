import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createClub } from "../redux/actions/clubActions";

function CreateClubForm(){
    const [clubName,setClubName] = useState("")
    const [clubDescription, setClubDescription] = useState("")
    const dispatch = useDispatch()
    const submit = ()=> {
       dispatch(createClub(clubName,clubDescription));
       window.location.replace('/clubs')
    }
    const handleNameChange = (e) => setClubName(e.target.value);
    const handleDescriptionChange = (e) => setClubDescription(e.target.value);
        return(
            <Form className="ms-3">
        
            <Form.Group className="mb-3" controlId="formClubName" >
                <Form.Label>Club Name</Form.Label>
                <Form.Control type="text" placeholder="Enter club's name"aria-required onChange={(e)=>handleNameChange(e)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formClubDescription" >
                <Form.Label>Club Description</Form.Label>
                <Form.Control type="text"  placeholder="Enter a description for club"aria-required onChange={(e)=>handleDescriptionChange(e)}/>
            </Form.Group>         
            <Button variant="info" style={{"color":"white"}}  type="button" onClick={()=>submit()}>Create</Button>
            <Button variant="danger" className="ms-3" type="button" onClick={()=>window.location.replace('/clubs')}>Cancel</Button> 
            </Form>
            
        );
}

export default CreateClubForm;