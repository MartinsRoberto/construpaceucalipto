import { useState } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const imgsPinus = []
const imgsEucalipto = []

for (let index = 1; index <= 56; index++) {
  imgsPinus.push('/images/pinus/' + (index + '').padStart(2, '0') + '.jpg')
}

for (let index = 1; index <= 80; index++) {
  imgsEucalipto.push('/images/work/' + (index + '').padStart(2, '0') + '.jpg')
}

const Area1Gallery = () => {
  const [modalShow, setModalShow] = useState(false)
  const [imgSelected, setImgSelected] = useState()

  const handleModal = (img) => {
    setModalShow(true)
    setImgSelected(img)
  }


  return (
    <section className="py-5">
      <Container>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Eucalipto Tratado">
            <Row>
              {imgsPinus && imgsPinus.map((img, index) => (
                <Col sm={6} md={4} lg={3} key={index} className="p-1" onClick={() => handleModal(img)}>
                  <img src={img} className="img-fluid img-gallery rounded" />
                </Col>
              ))}
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Pinus Tratado">
            <Row>
              {imgsEucalipto && imgsEucalipto.map((img, index) => (
                <Col sm={6} md={4} lg={3} key={index} className="p-1" onClick={() => handleModal(img)}>
                  <img src={img} className="img-fluid img-gallery rounded" />
                </Col>
              ))}
            </Row>
          </Tab>
        </Tabs>
        <MyVerticallyCenteredModal
          imgSelected={imgSelected}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </section>
  )
}

export default Area1Gallery

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <img src={props.imgSelected} alt="" className='img-fluid' />
    </Modal>
  )
}