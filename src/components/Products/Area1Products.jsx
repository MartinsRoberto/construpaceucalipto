import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const products = [
  {
    name: 'Eucalipto',
    description: 'Nosso eucalipto passa por uma seleção rigorosa, desde a floresta até o tratamento final. Tudo isso para garantir a melhor qualidade na sua obra. Por ser um recurso natural renovável, o eucalipto se solidifica como a madeira mais viável e barata para sua construção, seja ela no sítio ou na cidade. O tratamento consiste em impregnar as madeiras com uma solução de sais hidrossolúveis (CCA) até a sua saturação total, tornando-as imunes a fungos, insetos e outros agentes físicos e biológicos. Temos peças para cercas, parques e todo tipo de construção rústica.',
    image: '/images/produtos/eucalipto.png',
  },
  {
    name: 'Pinus',
    description: 'A madeira mais versátil para sua construção. Tratada em autoclave, o pinus tem impregnação de 100% da peça, fazendo com sua durabilidade seja prolongada. De fácil aplicação, o pinus autoclavado, pode ser usado em todas as fazes da sua obra, desde a fundação até o acabamento. A CONSTRUPAC dispõe de tábuas, vigas, decks, forros e assoalhos de diversas medidas, com qualidade e garantia de fábrica. Material seco e pronto para ser usado na sua obra',
    image: '/images/produtos/pinus.png',
  },
  {
    name: 'Fazenda',
    description: 'O Pinus e Eucalipto tratado são opções valiosas para propriedades rurais. Suas características únicas e durabilidade tornam essas madeiras ideais para cercas, mourões e estruturas de sustentação. Além de serem resistentes às intempéries, o tratamento adequado garante uma maior vida útil, reduzindo a necessidade de substituições frequentes. Com o Pinus e Eucalipto tratado, a fazenda se beneficia de materiais confiáveis e econômicos, proporcionando uma solução sustentável e eficiente para diversas aplicações agrícolas.',
    image: '/images/produtos/fazenda.jpg',
  },
  {
    name: 'Construção',
    description: 'Na construção, o Pinus e Eucalipto tratado ganham destaque por sua versatilidade e resistência. Utilizados para vigas, caibros e estruturas, essas madeiras tratadas oferecem uma excelente relação custo-benefício. Sua resistência natural aos insetos e à deterioração, potencializada pelo tratamento adequado, torna-as ideais para projetos de longa duração. Além disso, a utilização de madeiras tratadas contribui para práticas mais sustentáveis na construção, garantindo o uso consciente dos recursos naturais.',
    image: '/images/produtos/construcao.jpg',
  },
  {
    name: 'Agronomia',
    description: 'No campo da agronomia, o Pinus e Eucalipto tratado encontram aplicações valiosas. Essas madeiras são amplamente utilizadas na fabricação de estacas e mourões, fundamentais para a sustentação de cultivos agrícolas, como a vinhaça e a produção de mudas. Com o tratamento apropriado, essas madeiras tornam-se mais resistentes à umidade e a ataques de insetos, prolongando sua vida útil e garantindo maior estabilidade para as plantações. O uso do Pinus e Eucalipto tratado é uma escolha inteligente para otimizar o desempenho e a produtividade no setor agrícola.',
    image: '/images/produtos/agronomia.jpg',
  },
]

const Area1Products = () => {
  return (
    <section className="py-5">
      <Container>
        {products.map((product, index) => (
          <Row key={index} className={index % 2 === 0 ? 'flex-row-reverse mb-md-5 ' : 'mb-md-5'}>
            <Col lg={4}>
              <img src={product.image} alt={product.name} className="mb-3 mb-lg-0 img-fluid rounded" />
            </Col>
            <Col lg={8} className='mb-5 mb-lg-0 d-flex justify-content-center flex-column align-items-start'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </Col>
          </Row>
        ))}
      </Container>
    </section>
  )
}

export default Area1Products
