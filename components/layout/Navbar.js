import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { sideBarToggle, t } from "../../utils/utils";
import logotext from "@/images/take/logotext.svg";
import ChangeLanguaje from '../secondaries-components/change-languaje';
import { useTranslations } from 'next-intl';
function NavbarOne() {
    const t = useTranslations('Messages');
    return (
    <Navbar collapseOnSelect expand="lg" id="navbar" className="bg-body-tertiary navbar navbar-expand-lg navbar-light  fixed-top py-3">
      <Container>
        <Navbar.Brand href="#home"> <Image id="logotext" className="profile-img" src={logotext} alt="..." /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
           
          </Nav>
          <Nav>
            <Nav.Link href="#about" id="nav-link1">About Us</Nav.Link>
            <Nav.Link href="#service" id="nav-link2">Servicio</Nav.Link>
            <Nav.Link href="#team" id="nav-link3">Team</Nav.Link>
            <Nav.Link href="#contact" id="nav-link4">Contacto</Nav.Link>
            <a id="btn-quote"className="theme-btn style-three bg-white" onClick={() => sideBarToggle()}>
                  {t("get_quote")}<i className="fas fa-angle-double-right" />
                </a>
            <ChangeLanguaje />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarOne;