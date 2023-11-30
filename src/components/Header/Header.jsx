import { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const links = [
    { url: "/", name: "Página Inicial" },
    { url: "/products", name: "Produtos" },
    { url: "/gallery", name: "Galeria" },
    { url: "/tables", name: "Tabelas" },
    { url: "/contact", name: "Contato" },
    { url: "/about", name: "Sobre" },
    { url: "/blog", name: "Blog" },
  ]

  const firstNavLinkRef = useRef(null)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 992)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => {
      window.removeEventListener('resize', checkScreenSize)
    }
  }, [])

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-light" fixed="top" id='header'>
      <Container>
        <Navbar.Brand href="/" className="text-green fw-bold">
          <img src="/images/logo.png" alt="" className="img-fluid" width="200" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" ref={isSmallScreen ? firstNavLinkRef : null} />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className='mt-4 mb-5 mb-lg-0 mt-lg-0'>
            {links.map((link, index) => (
              <NavLink
                onClick={() => isSmallScreen && firstNavLinkRef.current.click()}
                key={index}
                to={link.url}
                className="ms-0 nav-link text-green text-uppercase fw-medium text-center"
              >
                {link.name}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
