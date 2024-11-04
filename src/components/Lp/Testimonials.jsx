import React from 'react';
import './Testimonials.css';
import { Container, Button } from 'react-bootstrap';

const Testimonials = () => {
    return (
        <section id='lp-testimonials' className='py-5 bg-dark-green'>
            <div className="container py-5">
                <div className="text-center row"> {/* Remove gap nas telas md e maiores */}
                    <div className="col-md-12 col-lg-4 mb-3 d-flex align-items-center">
                        <h3 className='text-white fs-3'>
                            O que nossos clientes têm a dizer sobre suas experiências na Construpac
                        </h3>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <div className='d-flex justify-content-center'>
                            <img src="/images/LP/testimonials_Dois.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='d-flex justify-content-center'>
                            <img src="/images/LP/testimonials_Um.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                    <a className="mt-4" href="https://wa.me/5511943957572?text=Ol%C3%A1,%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20madeiras%20que%20voc%C3%AAs%20t%C3%AAm%20dispon%C3%ADveis?">
                        <Button  className='text-center rounded-pill text-white' variant="" size="lg">
                            Quero um Orçamento
                        </Button>
                        </a>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
