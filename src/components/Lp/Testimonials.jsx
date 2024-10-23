import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    return (
        <section id='lp-testimonials' className='py-5 bg-dark-green'>
            <div className="container py-5">
                <div className="row"> {/* Remove gap nas telas md e maiores */}
                    <div className="col-md-12 col-lg-4 mb-3 d-flex align-items-center">
                        <h3 className='text-white fs-3'>
                            O que nossos clientes têm a dizer sobre suas experiências na Construpac
                        </h3>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <div className='d-flex justify-content-center'>
                            <img src="\src\components\Lp\imgs\testimonials_Um.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <div className='d-flex justify-content-center'>
                            <img src="\src\components\Lp\imgs\testimonials_Dois.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
