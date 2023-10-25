import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    { url: "/", name: "Página Inicial" },
    { url: "/products", name: "Produtos" },
    { url: "/gallery", name: "Galeria" },
    { url: "/tables", name: "Tabelas" },
    { url: "/contact", name: "Contato" }
  ];

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-light bg-opacity-75 py-3 py-md-4" fixed="top">
      <Container>
        <Navbar.Brand href="/" className="text-green fw-bold">
          <img src="/images/logo.png" alt="" className="img-fluid" width="200"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            {links.map((link, index) => (
              <NavLink key={index} to={link.url} className="nav-link text-green">
                {link.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
