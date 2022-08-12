import logo from "../assets/logo.svg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { motion } from "framer-motion"

const NavBar = () => {
  return (
    <header id="home">
    <div clasName="navbar">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand>
            <a href="#home">
              <motion.img
                initial={{y: -250}}
                animate={{y: 0}}
                transition={{type: "spring", stiffness:120}}
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
    </header>
  );
};

export default NavBar;
