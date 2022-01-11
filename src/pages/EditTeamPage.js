import EditTeamForm from "../components/EditTeamForm";
import PageHeader from "../components/PageHeader";
function EditTeamPage(){
    
    return(
       <>
       <PageHeader message={"Editing Team"}></PageHeader>
       <EditTeamForm></EditTeamForm>
       </>
    );
}

export default EditTeamPage;