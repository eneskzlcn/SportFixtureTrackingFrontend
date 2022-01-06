import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ClubDetailsPage from "../pages/club/ClubDetailsPage"
import ClubEditPage from "../pages/club/ClubEditPage";
import ClubsPage from "../pages/club/ClubsPage"
import WelcomePage from "../pages/WelcomePage"
import CreateClubPage from "../pages/club/CreateClubPage";
function RouterProvider(){
    return(
      <div>
        <Router>
        <Routes>
          <Route path="clubs/:clubId/details" element={<ClubDetailsPage></ClubDetailsPage>}></Route>
          <Route path="clubs/create" element={<CreateClubPage></CreateClubPage>}></Route>
          <Route path="clubs/:clubId/edit" element={<ClubEditPage></ClubEditPage>}></Route>
          <Route path="/clubs" element= {<ClubsPage ></ClubsPage>}></Route>
          <Route path="/" element= {<WelcomePage ></WelcomePage>}></Route>
        </Routes>
        </Router>
        </div>
    );
}

export default  RouterProvider;