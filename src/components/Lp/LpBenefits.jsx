import React from 'react';
import "./LpBenefits.css";
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

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

          <button className="mt-4 rounded-pill btn btn-success btn-lg btn-lp">
            Quero um Orçamento
          </button>
        </div>
      </div>

    </section>
  );
};

export default LpBenefits;
