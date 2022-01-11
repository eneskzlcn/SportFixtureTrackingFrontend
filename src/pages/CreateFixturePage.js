import CreateFixtureForm from "../components/CreateFixtureForm";
import PageHeader from "../components/PageHeader";




function CreateFixturePage(){
    return(<>
        <PageHeader message="Creating New Fixture"></PageHeader>
        <CreateFixtureForm></CreateFixtureForm>
    </>);
}

export default CreateFixturePage;