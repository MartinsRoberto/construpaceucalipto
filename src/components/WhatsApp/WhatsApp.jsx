import { BsWhatsapp } from 'react-icons/bs'

import './WhatsApp.css'

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5511911052709'
    const message = encodeURIComponent('Olá, gostaria de solicitar um orçamento.')
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`)
  }

  return (
    <div id='wpp' className='pulse' onClick={handleWhatsAppClick}>
      <BsWhatsapp />
    </div>
  )
}

export default WhatsApp
