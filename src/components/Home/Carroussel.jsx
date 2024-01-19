import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img01lg from '/images/banner carrosel/01 (desktop grande).png'
import img01md from '/images/banner carrosel/01 (desktop).png'
import img01 from '/images/banner carrosel/01 (mobile).png'
import img01sm from '/images/banner carrosel/01 (tablet paisagem).png'

import img02lg from '/images/banner carrosel/02 (desktop grande).png'
import img02md from '/images/banner carrosel/02 (desktop).png'
import img02 from '/images/banner carrosel/02 (mobile).png'
import img02sm from '/images/banner carrosel/02 (tablet paisagem).png'

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
    <section>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img src={firstSlide} alt="Primeiro slide" className='w-100' />
          </Carousel.Item>
          <Carousel.Item>
            <img src={secondSlide} alt="Primeiro slide" className='w-100' />
          </Carousel.Item>
        </Carousel>

    </section>
  )
}

export default Carroussel