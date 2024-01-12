import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import eucalipto from '/images/produtos/eucalipto.png'

const posts = [
  

  {
    id: "1",
    img: eucalipto,
    title: "Desvendando o Eucalipto Tratado: Uma Jornada Sustentável",
    description: " Descubra como o tratamento em autoclave com CCA transforma o eucalipto em uma opção durável, resistente a insetos e fungos. Vamos explorar as etapas desse processo e como ele eleva não apenas a qualidade, mas também a longevidade das estruturas construídas.",
    texts: [

      "<p class='mb-4'>O tratamento em autoclave com CCA é uma técnica inovadora que redefine as possibilidades do eucalipto na construção. Este processo revolucionário visa impregnar a madeira com uma combinação cuidadosamente equilibrada de Cobre, Cromo e Arsênio, criando não apenas um material resistente, mas uma solução duradoura para uma variedade de aplicações.</p>",

      "<h6>Etapas do Processo: Do Início ao Fim</h6>",

      "<p class='mb-4'>O processo começa com a seleção meticulosa de madeira de qualidade, garantindo que apenas as melhores peças sejam submetidas ao tratamento. Em seguida, a madeira é colocada em autoclaves, onde a pressão e a temperatura são controladas com precisão. Durante esse estágio, a mistura de CCA é aplicada, penetrando nas fibras da madeira e fortalecendo sua estrutura interna.</p>",

      "<p class='mb-4'>A eficácia do tratamento reside na ação conjunta desses elementos. O Cobre atua como um agente fungicida e bactericida, protegendo a madeira contra o desenvolvimento de fungos e bactérias que poderiam comprometer sua integridade. O Cromo age como um fixador, garantindo que a substância penetrante permaneça nas fibras da madeira, enquanto o Arsênio atua como um eficiente inseticida, prevenindo ataques de insetos que poderiam comprometer a estabilidade da estrutura.</p>",

      "<h6>Durabilidade e Resistência Sob Medida</h6>",

      "<p class='mb-4'>A transformação do eucalipto pelo tratamento em autoclave com CCA resulta em um material notavelmente durável, capaz de resistir às intempéries e aos desafios do ambiente externo. Essa resistência não apenas prolonga a vida útil das estruturas construídas, mas também reduz a necessidade de manutenção frequente, tornando-o uma escolha prática e econômica.</p>",

      "<p class='mb-4'>Além disso, a madeira tratada torna-se uma opção ambientalmente responsável. A preservação da integridade da estrutura ao longo do tempo significa menos desperdício e uma pegada ecológica reduzida, alinhando-se com os princípios da sustentabilidade.</p>",

      "<h6 >Versatilidade em Aplicações</h6>",

      "<p class='mb-4'>O eucalipto tratado com CCA, além de sua resistência notável, destaca-se por sua versatilidade. Desde decks e cercas até estruturas mais elaboradas, como pergolados e mobiliário de exterior, a madeira tratada oferece possibilidades infinitas para projetos que exigem durabilidade aliada à estética.</p>",
      
      "<p class='mb-4'>Em conclusão, o tratamento em autoclave com CCA transforma o eucalipto em uma solução de construção robusta, resistente e durável. Ao investir em estruturas construídas com esse material, você não está apenas escolhendo qualidade, mas também contribuindo para a sustentabilidade e longevidade das construções. Descubra o potencial transformador do eucalipto tratado e construa com confiança para o futuro.</p>",

    ]

    
  },

  {
    id: "2",
    img: eucalipto,
    title: "Desvendando o Eucalipto Tratado: Uma Jornada Sustentável",
    description: " Descubra como o tratamento em autoclave com CCA transforma o eucalipto em uma opção durável, resistente a insetos e fungos. Vamos explorar as etapas desse processo e como ele eleva não apenas a qualidade, mas também a longevidade das estruturas construídas.",
    texts: [

      "<p class='mb-4'>O tratamento em autoclave com CCA é uma técnica inovadora que redefine as possibilidades do eucalipto na construção. Este processo revolucionário visa impregnar a madeira com uma combinação cuidadosamente equilibrada de Cobre, Cromo e Arsênio, criando não apenas um material resistente, mas uma solução duradoura para uma variedade de aplicações.</p>",

      "<h6>Etapas do Processo: Do Início ao Fim</h6>",

      "<p class='mb-4'>O processo começa com a seleção meticulosa de madeira de qualidade, garantindo que apenas as melhores peças sejam submetidas ao tratamento. Em seguida, a madeira é colocada em autoclaves, onde a pressão e a temperatura são controladas com precisão. Durante esse estágio, a mistura de CCA é aplicada, penetrando nas fibras da madeira e fortalecendo sua estrutura interna.</p>",

      "<p class='mb-4'>A eficácia do tratamento reside na ação conjunta desses elementos. O Cobre atua como um agente fungicida e bactericida, protegendo a madeira contra o desenvolvimento de fungos e bactérias que poderiam comprometer sua integridade. O Cromo age como um fixador, garantindo que a substância penetrante permaneça nas fibras da madeira, enquanto o Arsênio atua como um eficiente inseticida, prevenindo ataques de insetos que poderiam comprometer a estabilidade da estrutura.</p>",

      "<h6>Durabilidade e Resistência Sob Medida</h6>",

      "<p class='mb-4'>A transformação do eucalipto pelo tratamento em autoclave com CCA resulta em um material notavelmente durável, capaz de resistir às intempéries e aos desafios do ambiente externo. Essa resistência não apenas prolonga a vida útil das estruturas construídas, mas também reduz a necessidade de manutenção frequente, tornando-o uma escolha prática e econômica.</p>",

      "<p class='mb-4'>Além disso, a madeira tratada torna-se uma opção ambientalmente responsável. A preservação da integridade da estrutura ao longo do tempo significa menos desperdício e uma pegada ecológica reduzida, alinhando-se com os princípios da sustentabilidade.</p>",

      "<h6 >Versatilidade em Aplicações</h6>",

      "<p class='mb-4'>O eucalipto tratado com CCA, além de sua resistência notável, destaca-se por sua versatilidade. Desde decks e cercas até estruturas mais elaboradas, como pergolados e mobiliário de exterior, a madeira tratada oferece possibilidades infinitas para projetos que exigem durabilidade aliada à estética.</p>",
      
      "<p class='mb-4'>Em conclusão, o tratamento em autoclave com CCA transforma o eucalipto em uma solução de construção robusta, resistente e durável. Ao investir em estruturas construídas com esse material, você não está apenas escolhendo qualidade, mas também contribuindo para a sustentabilidade e longevidade das construções. Descubra o potencial transformador do eucalipto tratado e construa com confiança para o futuro.</p>",

    ]

    
  }
  
]

const Area1Blog = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <section className='py-5'>
      <Container>
        {id == null ? <>
          <Row>
            {posts.map(post => (
              <Col xs={12} md={6} lg={4} className='mb-3' key={post.id} >
                <Card>
                  <Card.Img variant="top" src={post.img} />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>{post.description}</Card.Text>
                    <Button variant="primary btn-success" onClick={() => navigate(`/blog/${post.id}`)}>Leia mais</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </> : <>
          <Row>
            {posts.filter(post => post.id === id).map(filteredPost => (
              <>
                <Col md={1} lg={2} xl={3}></Col>
                <Col md={10} lg={8} xl={6} key={filteredPost.id}>
                  <Button variant="primary" className='mb-5 btn-secondary d-flex flex justify-content-center align-items-center' onClick={() => navigate(`/blog`)}>
                    <FaArrowLeft />
                  </Button>
                  <h2 className='mb-5'>{filteredPost.title}</h2>
                  <img src={filteredPost.img} alt="" className='mb-4 img-fluid rounded' />
                  <h4 className='my-3 mb-5'>{filteredPost.description}</h4>
                  {filteredPost.texts.map((item, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: item }} />
                  ))}
                  <Button variant="primary" className='mb-5 btn-secondary d-flex flex justify-content-center align-items-center' onClick={() => navigate(`/blog`)}>
                    <FaArrowLeft />
                  </Button>
                </Col>
                <Col md={1} lg={2} xl={3}></Col>
              </>
            ))}
          </Row>
        </>}
      </Container>
    </section>
  )
}

export default Area1Blog;
