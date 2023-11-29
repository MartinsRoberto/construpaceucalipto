import { AiOutlineInstagram } from 'react-icons/ai'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const Footer = () => {
  return (
    <footer className="" id='footer'>
      <div className="bg-light py-5">
        <Container>
          <Row>
            <Col sm={6} xl={3} className="mb-5 mb-xl-0">
              <img src="/images/logo.png" alt="" className="img-fluid" />
            </Col>
            <Col sm={6} xl={3} className="mb-5 mb-xl-0">
              <h4>Contato</h4>
              <ListGroup>
                <li className="mb-3">Telefone: +55 11 4786-2493</li>
                <li className="mb-3">Email: vendas@construpaceucalipto.com.br</li>
              </ListGroup>
            </Col>
            <Col sm={6} xl={3} className="mb-5 mb-xl-0">
              <h4>Onde estamos</h4>
              <ListGroup>
                <li className="mb-3">Av. Felicio Barutti 16, Taboão da Serra, SP.</li>
                <li className="mb-3">(Régis Bittencourt na altura do Shopping Taboão). </li>
              </ListGroup>
            </Col>
            <Col sm={6} xl={3} className="mb-5 mb-xl-0">
              <h4>Siga-nos</h4>
              <ListGroup className="text-uppercase">
                <li className="mb-3">
                  <a href="https://www.instagram.com/construpaceucalipto/" className='text-green fw-semibold nav-link'><AiOutlineInstagram />Construpaceucalipto</a>
                </li>
                <li className="mb-3">
                  <a href="https://www.instagram.com/formaodeouro/" className='text-green fw-semibold nav-link'><AiOutlineInstagram />Formaodeouro</a>
                </li>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-black text-white py-3">
        <Container className="container text-center">
          <p className='m-0'>
            ©Copyright CONSTRUPAC COMERCIO DE EUCALIPTO E SERVICOS LTDA. Todos Direitos Reservados.
          </p>
          <p className='m-0'>
            Desenvolvido por <a className="uppercase fw-bold bouncing-text bg-alva " target='blank' href="https://alvamind.com.br/">ALVAMIND WEBITES & MARKETING DIGITAL</a>
          </p>
        </Container>
      </div>
    </footer>
  )
}

export default Footer