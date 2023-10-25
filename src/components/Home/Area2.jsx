import { TbTargetArrow } from 'react-icons/tb'
import { PiBinocularsFill } from 'react-icons/pi'
import { FaRegHandshake } from 'react-icons/fa'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const items = [
  {
    icon: <PiBinocularsFill />,
    title: "Visão",
    text: "Nossa visão é ser referência no setor de eucalipto tratado, reconhecidos pela excelência e inovação em nossos produtos e serviços. Trabalhamos para fortalecer nossa presença no mercado nacional e internacional, sempre de forma sustentável, estabelecendo laços duradouros com nossos clientes, fornecedores e colaboradores, pautados pela ética e eficiência"
  },
  {
    icon: <TbTargetArrow  />,
    title: "Missão",
    text: "Nossa missão é atender com excelência e preço justo às necessidades de nossos clientes, oferecendo soluções inovadoras através de produtos de base florestal renovável, respeitando o meio ambiente e valorizando pessoas. Nosso propósito é melhorar a eficiência dos nossos clientes, proporcionando qualidade e confiança em cada interação"
  },
  {
    icon: <FaRegHandshake  />,
    title: "Valores",
    text: "Em nossa empresa, a ética e integridade são a base de nossos relacionamentos, pautando sempre a verdade e o respeito. Valorizamos e investimos no desenvolvimento de nosso time e parceiros, buscando relacionamentos duradouros e estimulando a paixão por desafios e ideias inovadoras. Nossa dedicação à satisfação do cliente, com competitividade e excelência, é igualada apenas pelo compromisso de preservar o meio ambiente para as futuras gerações"
  }
]
const Area2 = () => {
  return (
    <section className="py-5 bg-green">
      <Container>
        <Row className='text-center text-white'>
          {items.map((item, index) => (
            <Col lg={4} key={index}>
              <span className='fs-1 mb-3 d-block'>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Area2