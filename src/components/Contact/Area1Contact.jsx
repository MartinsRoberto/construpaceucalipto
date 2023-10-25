import { InstagramEmbed } from 'react-social-media-embed'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Area1Contact = () => {
  return (
    <section className='py-5'>
      <Container>
        <Row>
          <Col md={6} className="text-center text-md-start mb-5 mb-mb-0">
            <h3 className="mb-3 fs-3">Nossos Contatos</h3>
            <Row className="text-uppercase ">
              <ul>
                <li className="mb-3 fs-4 fw-semibold text-light-emphasis">redes sociais</li>
                <li className="mb-2 ">
                  <a href="https://www.instagram.com/construpaceucalipto/" className='text-green fw-semibold nav-link fs-5'><AiOutlineInstagram />Construpaceucalipto</a>
                </li>
                <li className="mb-2"><a href="https://www.facebook.com/construpaceucalipto.com.br/" className='text-green fw-semibold nav-link fs-5'><AiOutlineFacebook />Formaodeouro </a></li>
              </ul>
              <ul>
                <li className="mb-3 fs-4 fw-semibold text-light-emphasis">contato</li>
                <li className="mb-2 text-green fw-semibold"><a href="" className='text-green fw-semibold nav-link text-break fs-5'><AiOutlineMail /> vendas@Construpaceucalipto.com.br</a></li>
              </ul>
              <ul>
                <li className="mb-3 fs-4 fw-semibold text-light-emphasis">telefones</li>
                <li className="mb-2  text-green fw-semibold fs-5"><AiOutlinePhone /> (11)4786-2493</li>
                <li className="mb-2  text-green fw-semibold fs-5"><AiOutlineWhatsApp /> (11)91105-2709</li>
              </ul>
              <ul>
                <li className="mb-3 fs-4 fw-semibold text-light-emphasis">nosso endereço</li>
                <li className="mb-2  text-green fw-semibold fs-5"><FiMapPin /> Av. Felicio Baruti, 16 Cidade Intercap, Taboao da Serra - SP, 06757-000, Brasil</li>
              </ul>
            </Row>
          </Col>
          <Col md={6}>
            <InstagramEmbed url="https://www.instagram.com/p/CuCz1Q7pfT2/?utm_source=ig_embed&ig_rid=b54c7301-81da-4c3c-889a-b992e97bfddb" className="social-media"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Area1Contact
