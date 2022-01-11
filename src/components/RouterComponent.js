import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ClubEditPage from "../pages/ClubEditPage";
import ClubsPage from "../pages/ClubsPage"
import WelcomePage from "../pages/WelcomePage"
import CreateClubPage from "../pages/CreateClubPage";
import TeamsPage from "../pages/TeamsPage";
import CreateTeamPage from "../pages/CreateTeamPage";
import EditTeamPage from "../pages/EditTeamPage";
import SportsPage from "../pages/SportsPage";
import FixturesPage from "../pages/FixturesPage";
import FixtureResultsPage from "../pages/FixtureResultsPage";
import CreateFixturePage from "../pages/CreateFixturePage";
import CompleteFixturePage from "../pages/CompleteFixturePage";
function RouterProvider(){
    return(
      <div>
        <Router>
        <Routes>
          <Route path="/" element= {<WelcomePage ></WelcomePage>}></Route>
          <Route path="/clubs" element= {<ClubsPage ></ClubsPage>}></Route>
          <Route path="clubs/create" element={<CreateClubPage></CreateClubPage>}></Route>
          <Route path="clubs/:clubId/edit" element={<ClubEditPage></ClubEditPage>}></Route>
          <Route path="/teams" element= {<TeamsPage></TeamsPage>}></Route>
          <Route path="/teams/create" element= {<CreateTeamPage></CreateTeamPage>}></Route>
          <Route path="/teams/:teamId/edit" element= {<EditTeamPage></EditTeamPage>}></Route>
          <Route path="/sports" element= {<SportsPage></SportsPage>}></Route>
          <Route path="/fixtures" element= {<FixturesPage></FixturesPage>}></Route>
          <Route path="/fixtures/:fixtureId/edit" element= {<CreateFixturePage></CreateFixturePage>}></Route>
          <Route path="/fixtures/:fixtureId/complete" element= {<CompleteFixturePage></CompleteFixturePage>}></Route>
          <Route path="/fixtures/create" element= {<CreateFixturePage></CreateFixturePage>}></Route>
          <Route path="/fixtureResults" element= {<FixtureResultsPage></FixtureResultsPage>}></Route>
        </Routes>
        </Router>
        </div>
    );
}

export default  RouterProvider;