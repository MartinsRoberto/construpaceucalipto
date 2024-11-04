import React from 'react';
import "./Hero.css";
import { Container, Button } from 'react-bootstrap';
import { MdOutlineLocationOn } from "react-icons/md";

const Hero = () => {
    return (
        <div id="lpHero">
            <div className="video-container">
                {/* Conteúdo em primeiro plano */}
                <div className="overlay">
                    <Container className="text-center">
                        <img src="/images/logo.png" alt="Logo" className="logo" />
                        <h1 className="text-white display-4 fw-bold my-4">EXCELÊNCIA EM MADEIRAS, EUCALIPTO E PINUS TRATADOS</h1>
                        <h5 className="text-white">Medidas Personalizadas, Qualidade e Durabilidade para seus projetos</h5>


                        <a className='' href="https://wa.me/5511943957572?text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20madeiras%20que%20voc%C3%AAs%20t%C3%AAm%20dispon%C3%ADveis?">
                        <Button  className='text-center rounded-pill text-white' variant="" size="lg">
                            Quero um Orçamento
                        </Button>
                        </a>

                        <p className="text-white mt-5">
                            <span className="fw-bold h3"><MdOutlineLocationOn className='fw-bold' /></span>
                            <span className="fw-bold h4">Taboão da Serra-SP</span>
                        </p>
                    </Container>
                </div>
            </div>
        </div>
    );
};


export default Hero;
