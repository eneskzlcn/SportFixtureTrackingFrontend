
import EditClubForm from "../components/EditClubForm";
import PageHeader from "../components/PageHeader";
function ClubEditPage(){
    
    return(
       <>
       <PageHeader message={"Editing Club"}></PageHeader>
       <EditClubForm></EditClubForm>
       </>
    );
}

export default ClubEditPage;