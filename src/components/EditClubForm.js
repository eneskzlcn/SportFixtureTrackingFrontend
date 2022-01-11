import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {getClub, updateClub } from "../redux/actions/clubActions";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAlert } from "../redux/actions/alertActions";
import { AlertTypes } from "../redux/contants/alertTypes";

function EditClubForm(){
    const [clubName,setClubName] = useState("")
    const [clubDescription, setClubDescription] = useState("")
    const { clubId } = useParams();
    const dispatch = useDispatch();
    const editingClub = useSelector((state) => state.allClubs.selectedClub)
    
    useEffect(() => {
        
        dispatch(getClub(clubId))
    }, [clubId,dispatch])
    const submit = ()=> {
       if(clubName && clubName.length > 0 && clubDescription && clubDescription.length > 0 && editingClub)
       {
        dispatch(updateClub(editingClub.clubId,{clubId:editingClub.clubId,clubName:clubName,clubDescription:clubDescription}));
        dispatch(getAlert({message:"Club edited successfully",alertType:AlertTypes.SUCCESS}))
        window.location.replace('/clubs')
       }
      
    }
    const handleNameChange = (e) => setClubName(e.target.value);
    const handleDescriptionChange = (e) => setClubDescription(e.target.value);
        return(
            <Form className="mb-3 ms-3">
        
                <Form.Group className="mb-3" controlId="formClubName" >
                    <Form.Label>Club Name</Form.Label>
                    <Form.Control type="text" placeholder={editingClub.clubName}aria-required onChange={(e)=>handleNameChange(e)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formClubDescription">
                    <Form.Label>Club Description</Form.Label>
                    <Form.Control type="text"  placeholder={editingClub.clubDescription} aria-required onChange={(e)=>handleDescriptionChange(e)}/>
                </Form.Group>  
                <Form.Group>
                    <Button variant="success" className="" type="button" onClick={()=>submit()}> Save</Button>
                    <Button variant="danger" className="ms-3" type="button" onClick={()=>console.log("cancel")}> Cancel</Button>
                </Form.Group>       
            </Form>
        );
}

export default EditClubForm;