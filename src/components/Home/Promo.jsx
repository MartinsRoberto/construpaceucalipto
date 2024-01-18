import { useEffect, useState } from 'react'
import img01lg from '/images/Banner promoção/promo (desktop grande).png'
import img01md from '/images/Banner promoção/promo (desktop).png'
import img01 from '/images/Banner promoção/promo (mobile).png'
import img01sm from '/images/Banner promoção/promo (tablet retrato).png'

const Promo = () => {
  const [firstSlide, setFirstSlide] = useState(img01)

  useEffect(() => {
    let w = window.innerWidth
    if (w >= 576) {
      setFirstSlide(img01sm)
    }
    if (w >= 768) {
      setFirstSlide(img01md)
    }
    if (w >= 992) {
      setFirstSlide(img01lg)
    }
  }, [])
  return (
    <div>
      <div class="row justify-content-center align-items-end ">
        <button type="button" class="btn btn-success position-absolute col-auto my-sm-5 my-3 shadow rounded-5  ">
          <p class="h6 my-1 mx-2 ">Faça um orçamento</p>
        </button>
        <img src={firstSlide} alt="Primeiro slide" className='w-100' />

      </div>
    </div>
  )
}

export default Promo