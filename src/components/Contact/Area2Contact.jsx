import Container from 'react-bootstrap/Container'

const Area2Contact = () => {
  return (
    <section className='py-5'>
      <Container>
        <h3 className='text-uppercase text-center mb-5'>Onde Estamos</h3>
        <iframe
          title="Localização da Empresa"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14623.356484557102!2d-46.773229!3d-23.610102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce54440b58b4e9%3A0x901a8ac5b0949b8f!2sAv.%20Fel%C3%ADcio%20Baruti%2C%2016%20-%20Cidade%20Intercap%2C%20Tabo%C3%A3o%20da%20Serra%20-%20SP%2C%2006757-000%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1698175044314!5m2!1spt-BR!2sus"
          width="1000"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          loading="lazy"
          className='w-100'
        ></iframe>
      </Container>
    </section>
  )
}

export default Area2Contact
