import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img01lg from '/images/banner carrosel/bannerEuc.png'
import img01md from '/images/banner carrosel/bannerEuc.png'
import img01 from '/images/banner carrosel/bannerEucMobile.png'
import img01sm from '/images/banner carrosel/bannerEuc.png'

import img02lg from '/images/banner carrosel/bannerPinus.png'
import img02md from '/images/banner carrosel/bannerPinus.png'
import img02 from '/images/banner carrosel/bannerPinusMobile.png'
import img02sm from '/images/banner carrosel/bannerPinus.png'

const Carroussel = () => {

  const [firstSlide, setFirstSlide] = useState(img01)
  const [secondSlide, setSecondSlide] = useState(img02)

  useEffect(() => {
    let w = window.innerWidth
    if (w >= 576) {
      setFirstSlide(img01sm)
      setSecondSlide(img02sm)
    }
    if (w >= 768) {
      setFirstSlide(img01md)
      setSecondSlide(img02md)
    }
    if (w >= 992) {
      setFirstSlide(img01lg)
      setSecondSlide(img02lg)
    }
  }, [])

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  }

  return (
    <section className='position-relative'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={firstSlide} alt="Primeiro slide" className='w-100' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={secondSlide} alt="Primeiro slide" className='w-100' />
        </Carousel.Item>
      </Carousel>
      <div class="position-absolute bottom-0 start-50 translate-middle-x mb-1 mb-sm-2 mb-md-3 mb-lg-5" style={{zIndex: "50"}}>
        <button className="btn btn-success mb-2 rounded-5 shadow-sm ">Faça um orçamento</button>
      </div>
    </section>
  )
}

export default Carroussel