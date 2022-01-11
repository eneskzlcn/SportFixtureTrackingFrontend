
import CreateTeamForm from "../components/CreateTeamForm";
import PageHeader from "../components/PageHeader";


function CreateTeamPage(){

    return(
        <div>
            <PageHeader message={"Creating New Team"}></PageHeader>
            <CreateTeamForm></CreateTeamForm>
        </div>
    );
}

export default CreateTeamPage;