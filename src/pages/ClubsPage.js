
import PageHeader from "../components/PageHeader";
import PageCreateNewButton from "../components/PageCreateNewButton";
import ClubsAccordion from "../components/ClubsAccordion";
function ClubsPage(){
    return(
        <>
            <PageHeader message={"Clubs"}></PageHeader>
           
            <ClubsAccordion></ClubsAccordion>
            <PageCreateNewButton route={'/clubs/create'} name={'Club'}></PageCreateNewButton>
        </>
    );
}

export default ClubsPage