import React from 'react';
import "./LpBenefits.css";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Container, Button } from 'react-bootstrap';

const LpBenefits = () => {
  return (
    <section className="py-5 bg-dark-green" id="LpBenefits">
      <div className="container">
        <div className="text-center text-white">
          <h2 className="fw-bold">CONSTRUA COM TRANQUILIDADE</h2>
          <p className="text-lowercase fw-bold">livre-se dos problemas com a madeira da sua obra!</p>

          <div className='d-flex justify-content-center'>
            <div className="benefits-container mt-4">
              <div className="problemas-box p-4">
                <ul className="list-unstyled mb-0">
                  <li><span className="text-danger fw-bold"><FaX /></span> Falta de suporte técnico especializado</li>
                  <li><span className="text-danger fw-bold"><FaX /></span> Prazos de entregas não cumpridos</li>
                  <li><span className="text-danger fw-bold"><FaX /></span> Altos custos de envio</li>
                  <li className='last-text'><span className="text-danger fw-bold"><FaX /></span> Incerteza sobre a procedência da madeira</li>
                </ul>
              </div>

              <div className="solucoes-box p-4">
                <ul className="list-unstyled mb-0">
                  <li className='text-dark-green'><span className="text-success fw-bold"><FaCheck /></span> Especialistas prontos para te orientar na escolha correta da madeira</li>
                  <li className='text-dark-green'><span className="text-success fw-bold"><FaCheck /></span> Madeira entregue dentro do prazo</li>
                  <li className='text-dark-green'><span className="text-success fw-bold"><FaCheck /></span> Opções de entregas acessíveis e de baixo custo</li>
                  <li className='text-dark-green last-text'><span className="text-success fw-bold"><FaCheck /></span> Madeira proveniente de fontes sustentáveis</li>
                </ul>
              </div>
            </div>
          </div>

          <a className="mt-4" href="https://wa.me/5511943957572?text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20madeiras%20que%20voc%C3%AAs%20t%C3%AAm%20dispon%C3%ADveis?">
            <Button className='text-center rounded-pill text-white' variant="" size="lg">
              Quero um Orçamento
            </Button>
          </a>

        </div>
      </div>

    </section>
  );
};

export default LpBenefits;
