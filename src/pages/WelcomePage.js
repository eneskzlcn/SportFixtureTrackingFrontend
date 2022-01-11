import PageHeader from "../components/PageHeader";
import QueryForm from "../components/QueryForm";
import WelcomeCarousel from "../components/WelcomeCarousel";

function WelcomePage(props) {
   
    
    return ( 
            <>
                <PageHeader message="Welcome To Sport Fixture Tracking Site"></PageHeader> 
                {/* <WelcomeCard></WelcomeCard> */}
                <WelcomeCarousel></WelcomeCarousel>
                <QueryForm></QueryForm>
            </>
    
    );
  }
  
  export default WelcomePage;
  