import React from 'react';
import "./Hero.css";
import { Container, Button } from 'react-bootstrap';
import logo from '../../../public/images/logo.png';
import bkgdG from '../../../public/images/bkgd_g.jpg';
import { MdOutlineLocationOn } from "react-icons/md";



const Hero = () => {
    return (
        <div className="video-container">
            {/* Vídeo de fundo */}
            <img
                className="background-video"
                src={bkgdG}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Vídeo de fundo"
            />

            {/* Conteúdo em primeiro plano */}
            <div className="overlay ">
                <Container className="text-center">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1 className="text-white display-4 fw-bold my-4">EXCELÊNCIA EM MADEIRAS, EUCALIPTO E PINUS TRATADOS</h1>
                    <h5 className="text-white">Medidas Personalizadas, Qualidade e Durabilidade para seus projetos</h5>
                    <Button className='rounded-pill text-white' variant="" size="lg">
                        Quero um Orçamento
                    </Button>
                    <p className="text-white mt-5">
                        <span className="fw-bold h3"><MdOutlineLocationOn className='fw-bold' /></span>
                        <span className="fw-bold h4">Taboão da Serra-SP</span>
                    </p>
                </Container>
            </div>
        </div>
    );
};


export default Hero;
