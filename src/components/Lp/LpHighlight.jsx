import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./LpHighlight.css";

function LpHighlight() {
  return (
    <div className='py-5 ' id="lpHighlight">
      <Container className='text-sm-center py-sm-5 px-4'>
        <Row className="">
          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <div className="highlight-box">
              <div className='row'>
                <Col className="d-flex justify-content-center align-items-center" xs={3} sm={12}>
                  <img className="icon mb-2 mb-lg-0" src="https://d9hhrg4mnvzow.cloudfront.net/lp.construpaceucalipto.com.br/4ecd9219-sem-titulo-1-04_102s02s000000000000028.png" alt="Tratamento de Madeira" />
                </Col>
                <Col xs={9} sm={12}>
                  <h4 className="highlight-title">Tratamento de Madeira</h4>
                  <p>
                    Cuidamos de todo o processo de tratamento da madeira, garantindo um produto de alta qualidade.
                  </p>
                </Col>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <div className="highlight-box">
              <div className='row'>
                <Col className="d-flex justify-content-center align-items-center" xs={3} sm={12}>
                  <img className="icon mb-2 mb-lg-0" src="https://d9hhrg4mnvzow.cloudfront.net/lp.construpaceucalipto.com.br/66f305fb-sem-titulo-1-05_102s02s000000000000028.png" alt="Tratamento de Madeira" />
                </Col>
                <Col xs={9} sm={12}>
                  <h4 className="highlight-title">Suporte Técnico</h4>
                  <p>
                    Consultores prontos para fornecer orientações e assistência personalizadas para sua compra.
                  </p>
                </Col>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <div className="highlight-box">
              <div className='row'>
                <Col className="d-flex justify-content-center align-items-center" xs={3} sm={12}>
                  <img className="icon mb-2 mb-lg-0" src="https://d9hhrg4mnvzow.cloudfront.net/lp.construpaceucalipto.com.br/1e882d53-sem-titulo-1-02_102s02s000000000000028.png" alt="Tratamento de Madeira" />
                </Col>
                <Col xs={9} sm={12}>
                  <h4 className="highlight-title">Envio e Custos</h4>
                  <p>
                    Oferecemos soluções acessíveis e eficientes para atender às suas necessidades.
                  </p>
                </Col>
              </div>
            </div>
          </Col>
          <Col md={6} lg={3} className="mb-2 mb-lg-0">
            <div className="highlight-box">
              <div className='row'>
                
                <Col className="d-flex justify-content-center align-items-center" xs={3} sm={12}>
                  <img className="last-icon icon mb-2 mb-lg-0" src="https://d9hhrg4mnvzow.cloudfront.net/lp.construpaceucalipto.com.br/7bb6c144-sem-titulo-1-03_102s02s000000000000028.png" alt="Tratamento de Madeira" />
                </Col>
                <Col xs={9} sm={12}>
                  <h4 className="highlight-title">Madeira Certificada</h4>
                  <p>
                    Escolha sustentável e de qualidade para seus projetos.
                  </p>
                </Col>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LpHighlight;
