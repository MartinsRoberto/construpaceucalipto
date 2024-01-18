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
    <div className="position-relative">
      <div className="position-absolute bottom-0 start-50 translate-middle-x">
        <button type="button" className="btn btn-success shadow rounded-5 mb-4" style={{width: "200px"}}>
          <p className="h6 my-1 mx-2 ">Faça um orçamento</p>
        </button>
      </div>
      <img src={firstSlide} alt="Primeiro slide" className='w-100' style={{minHeight: "250px"}}/>
    </div>
  )
}

export default Promo