import Container from "react-bootstrap/esm/Container"
import Table from 'react-bootstrap/Table'

const dataTable = [
  // {
  //   title: "",
  //   values: ['C', 'O', 'M', 'P', 'R', 'I', 'M', 'E', 'N', 'T', 'O']
  // },
  {
    title: "04 a 06",
    values: ['2,20', '2,50', '3,00', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx']
  },
  {
    title: "06 a 08",
    values: ['2,20', '2,50', '3,00', '3,50', '4,00', '5,00', '6,00', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx']
  },
  {
    title: "08 a 10",
    values: ['2,20', '2,50', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', 'xxx', 'xxx', 'xxx', 'xxx']
  },
  {
    title: "10 a 12",
    values: ['2,20', '2,50', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', 'xxx', 'xxx', 'xxx', 'xxx']
  },
  {
    title: "12 a 14",
    values: ['2,20', '2,50', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', 'xxx', 'xxx', 'xxx']
  },
  {
    title: "14 a 16",
    values: ['2,20', '2,50', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', 'xxx', 'xxx', 'xxx']
  },
  {
    title: "16 a 18",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "18 a 20",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "20 a 22",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "22 a 24",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "24 a 26",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "26 a 28",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "28 a 30",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "30 a 32",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "32 a 34",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "34 a 36",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "36 a 38",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },
  {
    title: "38 a 40",
    values: ['xxx', 'xxx', '3,00', '3,50', '4,00', '5,00', '6,00', '7,00', '8,00', '9,00', '10,00', '11,00', '12,00']
  },

]

const Area1Tables = () => {

  const tableHeaders = dataTable.map((item, index) => (
    <th key={index} className="text-white bg-green">{item.title}</th>
  ))

  const tableData = dataTable[0].values.map((_, columnIndex) => (
    <tr key={columnIndex}>
      {dataTable.map((item, rowIndex) => (
        <td key={rowIndex} className={item.values[columnIndex] === 'xxx' ? 'bg-body-secondary' : ''}>
          {item.values[columnIndex]}
        </td>
      ))}
    </tr>
  ))
  return (
    <section className="py-5 text-center">
      <Container>
        <h3 className="text-uppercase mb-4">tabela</h3>
        <h4 className="text-uppercase mb-4">Nossas medidas disponíveis de Eucalipto Tratado</h4>
        <h5 className="text-uppercase mb-4">Medições de diâmetro do Eucalipto tratado, sempre na base (pé) da madeira.</h5>
        <Table responsive="xxl" className="table border">
          <thead>
            <tr>
              {tableHeaders}
            </tr>
          </thead>
          <tbody>
            {tableData}
          </tbody>
        </Table>
        <small className="text-danger fw-semibold">Obs: Madeiras com diâmetro acima de 20 cm sob encomenda</small>
      </Container>
    </section>
  )
}

export default Area1Tables