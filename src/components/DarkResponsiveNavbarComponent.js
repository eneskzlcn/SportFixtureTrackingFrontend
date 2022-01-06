import { Navbar,Container,Nav } from "react-bootstrap";

function DarkResponsiveNavbar(){
    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Sport Fixtures</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/clubs">Clubs</Nav.Link>
              <Nav.Link href="#link">Sports</Nav.Link>
              <Nav.Link href="">Teams</Nav.Link>
              <Nav.Link href="">Fixtures</Nav.Link>
              <Nav.Link href="">Fixture Results</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}
export default DarkResponsiveNavbar