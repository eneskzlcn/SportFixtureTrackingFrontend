import TeamsAccordion from "../components/TeamsAccordion";
import PageHeader from "../components/PageHeader";
import PageCreateNewButton from "../components/PageCreateNewButton";

function TeamsPage(){

    return(
        <div>
            <PageHeader message={"Teams"}></PageHeader>
            <TeamsAccordion></TeamsAccordion>
            <PageCreateNewButton route={'/teams/create'} name={'Team'}></PageCreateNewButton>
        </div>
    );
}

export default TeamsPage;