import React from 'react';
import './LpHighlight.css';

const highlights = [
  {
    imgSrc: "/images/LP/terapia.png",
    title: "Tratamento de Madeira",
    description: "Cuidamos de todo o processo de tratamento da madeira, garantindo um produto de alta qualidade.",
  },
  {
    imgSrc: "/images/LP/atendimento-ao-cliente.png",
    title: "Suporte Técnico",
    description: "Consultores prontos para fornecer orientações e assistência personalizadas para sua compra.",
  },
  {
    imgSrc: "/images/LP/caminhao.png",
    title: "Envio e Custos",
    description: "Oferecemos soluções acessíveis e eficientes para atender às suas necessidades.",
  },
  {
    imgSrc: "/images/LP/certificado-de-garantia.png",
    title: "Madeira Certificada",
    description: "Escolha sustentável e de qualidade para seus projetos.",
  },
];

const LpHighlight = () => {
  return (
    <div className='py-5' id="lpHighlight">
      <div className='container text-center py-1'>
        <div className='row'>
          {highlights.map((highlight, index) => (
            <div className="col-lg-6 highlight-box my-4" key={index}>
              <div className="d-flex align-items-start">
                <img className="icon me-3" src={highlight.imgSrc} alt={highlight.title} style={{ maxWidth: '80px', maxHeight: '80px' }} />
                <div className="text-start">
                  <h5 className="text-brown">{highlight.title}</h5>
                  <p>{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LpHighlight;
