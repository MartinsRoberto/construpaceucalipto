import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import eucalipto from '/images/produtos/eucalipto.png';
import deck from '/images/pinus/02.jpg';
import tiposEucalipto from '/images/work/81.png';
import tratamento from '/images/blog/tratamento.png';

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
    img: deck,
    title: "Estratégias de Tratamento e Vantagens - Decidindo com Sabedoria para o seu Deck",
    description: "Ao explorar opções para decks, o tratamento da madeira desempenha um papel essencial na durabilidade e longevidade. Neste contexto, vamos aprofundar as vantagens específicas do Pinus e do Eucalipto tratados, destacando também as opções mais acessíveis para quem busca um investimento consciente.",
    texts: [


      "<h6>1. Pinus Tratado: Durabilidade e Valor Acessível em Sintonia</h6>",

      "<p class='mb-4'>O Pinus tratado é uma escolha inteligente para aqueles que buscam uma solução duradoura sem comprometer o bolso. Graças ao tratamento específico, o Pinus torna-se resistente a fungos, bactérias e cupins, garantindo uma vida útil prolongada. Sua acessibilidade em termos de preço torna-o uma opção atraente para quem deseja um deck durável sem exceder o orçamento disponível.</p>",

      "<h6>2. Eucalipto Tratado: Versatilidade e Economia para Projetos Duráveis</h6>",

      "<p class='mb-4'>O Eucalipto tratado destaca-se por sua versatilidade e preço acessível, tornando-o uma escolha popular para decks. Com processos de tratamento que reforçam sua resistência, o Eucalipto oferece durabilidade contra elementos como fungos e insetos. Sua rápida taxa de crescimento contribui para uma oferta constante, resultando em preços acessíveis. Ideal para quem busca um deck durável, esteticamente agradável e amigável ao orçamento.</p>",

      "<h6 >3. Cumaru: Exoticidade com Durabilidade Reforçada</h6>",

      "<p class='mb-4'>Para aqueles que desejam investir um pouco mais em um deck exótico, o Cumaru tratado é uma escolha fascinante. Sua durabilidade é amplificada pelo tratamento, garantindo resistência adicional contra agentes deteriorantes. Embora o Cumaru seja mais caro em comparação com Pinus e Eucalipto, seu apelo estético e vida útil prolongada justificam o investimento.</p>",

      "<h6>4. Ipê: A Exclusividade Refletida em Durabilidade e Estilo </h6>",

      "<p class='mb-4'>O Ipê, embora represente um investimento mais significativo, oferece uma combinação incomparável de exclusividade, durabilidade e estilo. Tratado para resistir a condições adversas, o Ipê destaca-se como uma opção premium. Se o orçamento permite, optar pelo Ipê pode proporcionar um deck que não apenas resiste ao teste do tempo, mas também se destaca pela sua elegância.</p>",

      "<h6>Conclusão: Escolhas Conscientes para Decks Duráveis e Econômicos</h6>",

      "<p class='mb-4'>Ao considerar opções para decks tratados, o Pinus e o Eucalipto emergem como líderes, oferecendo durabilidade e vantagens econômicas. O tratamento específico dessas madeiras não só reforça sua resistência, mas também torna-as acessíveis para diversos orçamentos. Seja pela economia do Pinus ou pela versatilidade do Eucalipto, a escolha consciente resultará em um deck que une durabilidade, estética e valor acessível.</p>",



    ]


  },

  {
    id: "3",
    img: tiposEucalipto,
    title: "Uma questão frequente entre nossos clientes e leitores diz respeito às diversas espécies de eucalipto tratado, e suas respectivas vantagens e desvantagens na utilização.",
    description: "Com mais de 800 espécies apenas no Brasil, muitas delas pouco conhecidas do público em geral, o eucalipto desempenha papéis variados, desde a produção de carvão e celulose até o uso na construção, cercamento e paisagismo. Neste artigo, vamos nos concentrar nas principais espécies utilizadas no tratamento em autoclave, oferecendo insights práticos baseados em nossa vasta experiência com o manejo do eucalipto tratado.",
    texts: [


      "<h6>1. Eucalipto Citriodora:</h6>",

      "<p class='mb-4'>Esta espécie se destaca pela excelente resistência mecânica entre as principais utilizadas no tratamento em autoclave. Suas toras são mais densas e suas fibras mais resistentes, o que reduz significativamente o risco de rachaduras. É a escolha preferida para produção de madeira serrada, como tábuas e vigas, devido à sua resistência a empenamento e rachaduras. No entanto, sua simetria pode deixar um pouco a desejar, apresentando variações e irregularidades nas toras brutas, especialmente nas mais finas.</p>",

      "<h6>2. Eucalipto Cloeziana:</h6>",

      "<p class='mb-4'>Esta espécie se aproxima do citriodora em resistência mecânica, embora não tenha a mesma densidade. No entanto, apresenta uniformidade excepcional, com pouca diferença entre a base e o topo das peças, baixo índice de rachaduras e uma coloração mais clara. Por essas características, tem se tornado popular entre arquitetos e paisagistas para trabalhos que exigem um acabamento de alta qualidade.</p>",

      "<h6 >3. Eucalipto Saligna:</h6>",

      "<p class='mb-4'>O saligna é uma das espécies mais comuns no tratamento em autoclave, especialmente nas regiões sul e sudeste do Brasil. Embora seja amplamente utilizada devido à sua abundância, possui densidade inferior, resultando em resistência mecânica mais baixa e maior suscetibilidade a rachaduras. Por isso, é menos empregada em estruturas, sendo preferida para projetos de menor exigência, como cercas e galpões menores.</p>",

      "<h6>4. Eucalipto Grandis:</h6>",

      "<p class='mb-4'>Esta espécie se situa entre o saligna e o cloeziana em termos de resistência e rachaduras. Com peças uniformes, mas com um pouco mais de nós, é amplamente utilizada na região sul do Brasil, onde é mais comum. Em outras regiões, sua presença em usinas de tratamento é menos frequente.</p>",

      "<h6>Ao considerar a escolha da espécie de eucalipto tratado para seu projeto, é essencial ponderar não apenas as características individuais de cada espécie, mas também as exigências específicas do projeto em questão.</h6>",


    ]


  },
  {
    id: "4",
    img: tratamento,
    title: "Eucalipto Tratado: Sustentabilidade e Inovação na Construção Moderna",
    description: "Explore como o eucalipto tratado com CCA se destaca como uma escolha sustentável e inovadora na construção. Descubra as etapas do tratamento e os benefícios ambientais e estruturais que ele proporciona.",
    texts: [

      "<p class='mb-4'>O eucalipto tratado com CCA (Cobre, Cromo e Arsênio) surge como uma solução inovadora e sustentável para a construção civil. Este método de tratamento aumenta significativamente a durabilidade e a resistência da madeira, tornando-a uma escolha preferida para diversas aplicações externas.</p>",

      "<h6>O Processo de Tratamento: Passo a Passo</h6>",

      "<p class='mb-4'>O tratamento do eucalipto começa com a seleção de madeiras de alta qualidade. Essas peças são então submetidas a um processo de autoclave, onde são impregnadas com a solução de CCA sob alta pressão. Esse procedimento garante que os agentes preservativos penetrem profundamente nas fibras da madeira, proporcionando uma proteção duradoura.</p>",

      "<p class='mb-4'>Cada componente do CCA desempenha um papel crucial. O Cobre atua como fungicida, prevenindo o crescimento de fungos e bactérias. O Cromo funciona como fixador, assegurando que os agentes preservativos permaneçam na madeira, enquanto o Arsênio oferece proteção contra insetos, prevenindo infestações que poderiam comprometer a estrutura.</p>",

      "<h6>Vantagens do Eucalipto Tratado</h6>",

      "<p class='mb-4'>O eucalipto tratado oferece uma série de benefícios, sendo a durabilidade e a resistência os principais. A madeira tratada é capaz de resistir a condições climáticas adversas e ataques biológicos, prolongando a vida útil das estruturas e reduzindo a necessidade de manutenção frequente.</p>",

      "<p class='mb-4'>Além disso, o uso de madeira tratada é uma escolha sustentável. A longevidade das estruturas significa menos substituição de materiais ao longo do tempo, contribuindo para a redução do desperdício e promovendo uma construção mais ecológica.</p>",

      "<h6>Aplicações Versáteis</h6>",

      "<p class='mb-4'>A versatilidade do eucalipto tratado permite sua utilização em uma ampla gama de projetos. De decks e cercas a estruturas mais complexas como pergolados e móveis de jardim, a madeira tratada combina funcionalidade e estética, oferecendo soluções adaptáveis para diferentes necessidades de construção.</p>",

      "<p class='mb-4'>Concluindo, o tratamento do eucalipto com CCA representa uma fusão de inovação e sustentabilidade. Escolher madeira tratada para suas construções é investir em qualidade e durabilidade, ao mesmo tempo em que se contribui para um futuro mais sustentável. Descubra as vantagens do eucalipto tratado e transforme seus projetos com essa solução robusta e ecologicamente responsável.</p>",

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
                  <Button variant="primary" className='mb-5 mt-5 btn-secondary d-flex flex justify-content-center align-items-center' onClick={() => navigate(`/blog`)}>
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
