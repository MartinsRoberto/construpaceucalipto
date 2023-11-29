import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import etapa0 from '/images/etapas/ETAPA0.png'
import etapa1 from '/images/etapas/ETAPA1.png'
import etapa2 from '/images/etapas/ETAPA2.png'
import etapa3 from '/images/etapas/ETAPA3.png'
import etapa4 from '/images/etapas/ETAPA4.png'
import etapa5 from '/images/etapas/ETAPA5.png'
import etapa6 from '/images/etapas/ETAPA6.png'

const CarouselProducts = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <section>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={etapa0} alt="Primeiro slide" className='img-fluid' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={etapa1} alt="Primeiro slide" className='img-fluid' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={etapa2} alt="Primeiro slide" className='img-fluid' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={etapa3} alt="Primeiro slide" className='img-fluid' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={etapa4} alt="Primeiro slide" className='img-fluid' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={etapa5} alt="Primeiro slide" className='img-fluid' />
        </Carousel.Item>
        <Carousel.Item>
          <img src={etapa6} alt="Primeiro slide" className='img-fluid' />
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default CarouselProducts