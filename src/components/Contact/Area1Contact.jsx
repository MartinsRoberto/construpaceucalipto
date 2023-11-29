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
          <Col md={6} className="text-center text-md-start d-flex flex-column align-items-center  justify-content-center ">
            <h3 className="mb-3 fs-3">Nossos Contatos</h3>
            <Row className="text-uppercase">
              <ul>
                <li className="mb-3 fs-4 fw-semibold text-light-emphasis">redes sociais</li>
                <li className="mb-2 ">
                  <a href="https://www.instagram.com/construpaceucalipto/" className='text-green fw-semibold nav-link fs-5' target='_blank'><AiOutlineInstagram />Construpaceucalipto</a>
                </li>
                <li className="mb-2"><a href="https://www.facebook.com/construpaceucalipto.com.br/" className='text-green fw-semibold nav-link fs-5' target='_blank'><AiOutlineFacebook />ConstrupacEucalipto </a></li>
              </ul>
              <ul>
                <li className="mb-3 fs-4 fw-semibold text-light-emphasis">contato</li>
                <li className="mb-2 text-green fw-semibold"><a href="" className='text-green fw-semibold nav-link text-break fs-5'><AiOutlineMail /> vendas@Construpaceucalipto.com.br</a></li>
              </ul>
              <ul>
                <li className="mb-3 fs-4 fw-semibold text-light-emphasis">telefones</li>
                <li className="mb-2  text-green fw-semibold fs-5"><a className='text-green text-decoration-none ' href="tel:+1147862493"><AiOutlinePhone /> (11)4786-2493</a></li>
                <li className="mb-2  text-green fw-semibold fs-5"><a className='text-green text-decoration-none ' href="tel:+11911052709"><AiOutlineWhatsApp/> (11)91105-2709</a></li>
              </ul>
              <ul>
                <li className="mb-3 fs-4 fw-semibold text-light-emphasis">nosso endereço</li>
                <li className="mb-2  text-green fw-semibold fs-5"><a className='text-green text-decoration-none 'href="https://www.google.com.br/maps/place/Construpac+Eucalipto+Tratado/@-23.6101019,-46.775809,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce54440cadc435:0x9cdfb44a6347ae1b!8m2!3d-23.6101019!4d-46.7732287!16s%2Fg%2F11sdbfy9_v?entry=ttu"><FiMapPin /> Av. Felicio Baruti, 16 Cidade Intercap, Taboao da Serra - SP, 06757-000, Brasil</a></li>
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
