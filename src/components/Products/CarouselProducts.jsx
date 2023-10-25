import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselProducts = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <section>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src="https://www.construpaceucalipto.com.br/images/ETAPAS%20DE%20TRATAMENTO/ETAPA0.png" alt="Primeiro slide" className='img-fluidz'/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.construpaceucalipto.com.br/images/ETAPAS%20DE%20TRATAMENTO/ETAPA0.png" alt="Primeiro slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.construpaceucalipto.com.br/images/ETAPAS%20DE%20TRATAMENTO/ETAPA0.png" alt="Primeiro slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.construpaceucalipto.com.br/images/ETAPAS%20DE%20TRATAMENTO/ETAPA0.png" alt="Primeiro slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://www.construpaceucalipto.com.br/images/ETAPAS%20DE%20TRATAMENTO/ETAPA0.png" alt="Primeiro slide" />
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default CarouselProducts