import FixtureGridList from "../components/FixtureGridList";
import PageCreateNewButton from "../components/PageCreateNewButton";
import PageHeader from "../components/PageHeader";

function FixturesPage(){
    return(
        <>
           <PageHeader message="Fixtures"></PageHeader>
           <FixtureGridList></FixtureGridList>
           <PageCreateNewButton route='/fixtures/create' name="Fixture"></PageCreateNewButton>
        </>
    );
}

export default FixturesPage