import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "./LpBenefits.css";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const LpBenefits = () => {
  return (
    <div className="py-4 bg-dark-green" id="LpBenefits">
      <Container className="text-center text-white px-5">
        <h2 className="fw-bold">CONSTRUA COM TRANQUILIDADE</h2>
        <p className="text-lowercase fw-bold">livre-se dos problemas com a madeira da sua obra!</p>
        <Row className="justify-content-center mt-4">
          <Col lg={6}>
            <div className="problemas-box p-4">
              <ul className="list-unstyled mb-0">
                <li><span className="text-danger fw-bold"><FaX /></span> Falta de suporte técnico especializado</li>
                <li><span className="text-danger fw-bold"><FaX /></span> Prazos de entregas não cumpridos</li>
                <li><span className="text-danger fw-bold"><FaX /></span> Altos custos de envio</li>
                <li className='last-text'><span className="text-danger fw-bold aaa"><FaX /></span> Incerteza sobre a procedência da madeira</li>
              </ul>
            </div>

            <div className="solucoes-box p-4">
              <ul className="list-unstyled mb-0">
                <li><span className="text-success fw-bold"><FaCheck /></span> Especialistas prontos para te orientar na escolha correta da madeira</li>
                <li><span className="text-success fw-bold"><FaCheck /></span> Madeira entregue dentro do prazo</li>
                <li><span className="text-success fw-bold"><FaCheck /></span> Opções de entregas acessíveis e de baixo custo</li>
                <li className='last-text'><span className="text-success fw-bold"><FaCheck /></span> Madeira proveniente de fontes sustentáveis</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Button className="mt-4 rounded-pill" variant="success" size="lg">
          Quero um Orçamento
        </Button>
      </Container>
    </div>
  );
};

export default LpBenefits;
