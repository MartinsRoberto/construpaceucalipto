import React from 'react';
import './Utilities.css'

const utilityData = [
    {
        title: 'Telhados e Estruturas',
        description: 'Descrição 1',
        usage: 'Utilizados para coberturas e suportes estruturais, proporcionando durabilidade e resistência.',
        imgSrc: "/src/components/Lp/imgs/Telhado.png",
    },
    {
        title: 'Pergolados',
        description: 'Descrição 2',
        usage: 'Ideais para criar áreas sombreadas em jardins e pátios, trazendo estilo e funcionalidade.',
        imgSrc: "/src/components/Lp/imgs/Pergolado.png",
    },
    {
        title: 'Quiosques',
        description: 'Descrição 3',
        usage: 'Estruturas abertas que oferecem um espaço para relaxamento e socialização ao ar livre.',
        imgSrc: "/src/components/Lp/imgs/Quiosque.png",
    },
    {
        title: 'Decks e Mezaninos',
        description: 'Descrição 4',
        usage: 'Superfícies elevadas que expandem o espaço útil em ambientes externos e internos.',
        imgSrc: "/src/components/Lp/imgs/Deck.png",
    },
    {
        title: 'Cercas',
        description: 'Descrição 5',
        usage: 'Usadas para delimitar áreas, garantir privacidade e aumentar a segurança.',
        imgSrc: "/src/components/Lp/imgs/Cerca.png",
    },
    {
        title: 'Outros',
        description: 'Descrição 6',
        usage: 'Diversas outras aplicações do eucalipto e pinus tratado em projetos de construção.',
        imgSrc: "/src/components/Lp/imgs/Outros.png",
    },
];

const Utilities = () => {
    return (
        <section id='lp-utilities' className='bg-light py-5'>
            <div className="container py-5">
                <h3 className='text-end mb-5 fw-bold text-dark-green'>
                    Descubra as Diversas Aplicabilidades <br /> do Eucalipto e Pinus Tratado
                </h3>
                <div className="row mb-5">
                    {utilityData.map((item, index) => (
                        <div className="col-sm-6 col-md-4 text-center mb-4" key={index}>
                            <img src={item.imgSrc} alt={item.title} className="img-fluid mb-3" style={{ width: '150px', height: '150px' }} />
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <h5 className="mb-0 fw-bold text-brown">{item.title}</h5>
                            </div>
                            <small className="text-muted fs-6">{item.usage}</small>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    <button className="mt-4 rounded-pill btn btn-success btn-lg btn-lp">
                        Quero um Orçamento
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Utilities;