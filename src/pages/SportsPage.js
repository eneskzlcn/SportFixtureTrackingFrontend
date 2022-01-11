import PageHeader from "../components/PageHeader";
import SportsAccordion from "../components/SportsAccordion";

function SportsPage(){

    return(
        <div>
            <PageHeader message={"Sports"}></PageHeader>
            <SportsAccordion></SportsAccordion>
        </div>
    );
}

export default SportsPage;