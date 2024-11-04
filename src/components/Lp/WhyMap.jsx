import React from 'react';
import './WhyMap.css';
import { Container, Button } from 'react-bootstrap'

const WhyMap = () => {
    return (
        <section id="lp-whymap" className='py-5 bg-dark-green'>
            <div className="text-center container">
                <div className="row">
                    <div className="col-lg-5 text-white mb-5 mb-lg-0">
                        <div className='d-flex align-items-center h-100'>
                            <div>
                                <h3 className='mb-5'>Por que a Construpac é ideal para você?</h3>
                                <p className='fw-semibold'>
                                    A Construpac se destaca em oferecer produtos de alta qualidade, atendimento personalizado e compromisso com a satisfação do cliente.
                                </p>
                                <p className='fw-semibold'>
                                    Garantimos madeiras certificadas e soluções sob medida, além da experiência em cada etapa do processo, contamos ainda com uma entrega eficiente.
                                </p>
                                <div className="text-center">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4555.518456798994!2d-46.7780996129606!3d-23.610096908621376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54440cadc435%3A0x9cdfb44a6347ae1b!2sConstrupac%20Eucalipto%20Tratado!5e1!3m2!1spt-BR!2sbr!4v1729693335096!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <a className="text-center mt-5" href="https://wa.me/5511943957572?text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20madeiras%20que%20voc%C3%AAs%20t%C3%AAm%20dispon%C3%ADveis?">
                    <Button className='text-center rounded-pill text-white' variant="" size="lg">
                        Quero um Orçamento
                    </Button>
                </a>
            </div>
        </section>
    )
}

export default WhyMap