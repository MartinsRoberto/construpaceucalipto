import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import mascote from '/images/Mascote.png'

const Area1About = () => {
  return (
    <section className=''>
      <Container>
        <Row>
          <Col lg={7} className='d-flex flex-column justify-content-center'>
            <h2 className='mb-5'>Construpac Eucalipto</h2>
            <h6 style={{ lineHeight: '1.5' }}>
              A história da Construpac Eucalipto é um testemunho de crescimento, dedicação e respeito pela natureza. Tudo começou em um modesto terreno, onde visionários viram no eucalipto mais do que apenas um tipo de madeira. Ali, nasceu a ideia de fornecer madeira de qualidade, marcando o início de uma jornada que transcenderia expectativas.
            </h6>
            <h6 style={{ lineHeight: '1.5' }}>
              Nos primeiros anos, éramos conhecidos como simples fornecedores de madeira, mas nossa visão ambiciosa nos impulsionou a explorar cada pluralidade do universo do eucalipto. O plantio inicial evoluiu para o corte preciso, e percebemos a importância de garantir não apenas a quantidade, mas a qualidade do que oferecíamos.
            </h6>
            <h6 style={{ lineHeight: '1.5' }}>
              À medida que a demanda crescia, surgiu a possibilidade e então que decidimos construir nossa própria usina, um marco que não apenas consolidou nossa presença no setor, mas também nos deu controle total sobre a produção, desde a árvore até o produto final.
            </h6>
            <h6 style={{ lineHeight: '1.5' }}>
              A início do tratamento em autoclave com CCA certifica ou comprova nosso compromisso com nossos clientes e parceiros em fornecer um produto com qualidade, durabilidade e segurança. Cada passo foi cuidadosamente planejado, com a consciência de que cada produto que deixava nossa usina carregava não apenas nossa marca, mas uma história de qualidade e confiabilidade.
            </h6>
            <h6 style={{ lineHeight: '1.5' }}>
              Ao longo dos anos, nossa empresa cresceu, não apenas em infraestrutura, mas também alinhada aos nossos valores. Adotamos práticas sustentáveis, investimos em tecnologia de ponta e nos tornamos uma empresa dedicada não apenas à produção, mas à preservação do meio ambiente.
            </h6>

          </Col>
          <Col lg={5} className='d-flex justify-content-center'>
            <img src={mascote} alt="" className='img-fluid' style={{ scale: '0.7' }} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Area1About
