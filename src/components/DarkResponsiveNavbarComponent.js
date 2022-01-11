import { Navbar,Container,Nav } from "react-bootstrap";

function DarkResponsiveNavbar(){
    return(
        <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/">Sport Fixtures</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/clubs">Clubs</Nav.Link>
              <Nav.Link href="/sports">Sports</Nav.Link>
              <Nav.Link href="/teams">Teams</Nav.Link>
              <Nav.Link href="/fixtures">Fixtures</Nav.Link>
              <Nav.Link href="/fixtureResults">Fixture Results</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
export default DarkResponsiveNavbar