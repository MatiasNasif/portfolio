import logo from "../assets/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <div clasName="navbar" id="home">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <a href="#home">
              <img
                src={logo}
                style={{
                  width: "35px",
                  borderRadius: "50%",
                }}
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#projects">Proyectos</Nav.Link>
              <Nav.Link href="#aboutMe">Sobre Mí</Nav.Link>
              <Nav.Link href="#contact">Contáctame</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
