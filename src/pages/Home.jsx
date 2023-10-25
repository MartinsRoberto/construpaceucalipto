import Area1 from "../components/Home/Area1"
import Area2 from "../components/Home/Area2"
import Carroussel from "../components/Home/Carroussel"
import Promo from "../components/Home/Promo"

const Home = () => {
  return (
    <div id="home">
      <Promo />
      <Area1 />
      <Carroussel />
      <Area2 />
    </div>
  )
}

export default Home