// import Area1 from "../components/Home/Area1"
// import Area2 from "../components/Home/Area2"
// import Carroussel from "../components/Home/Carroussel"
// import Promo from "../components/Home/Promo"

// const Home = () => {
//   const generateWaveSVGs = (count) => {
//     const waves = []
//     for (let i = 0; i < count; i++) {
//       waves.push(
//         <div key={i} className="my-slide block dark:hidden">
//           <div style={{ height: "100px", width: "250px" }}>
//             <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 -1 150 20">
//               <defs>
//                 <path id={`wave-${i + 1}`} d="M -75 10 C -50 10 -25 0 0 0 S 50 10 75 10 S 125 0 150 0 S 200 10 225 10 V 20 H -75 Z"></path>
//               </defs>
//               <use xlinkHref={`#wave-${i + 1}`} fill="#00883B" style={{ animationPlayState: 'paused' }}></use>
//             </svg>
//           </div>
//         </div>
//       )
//     }
//     return waves
//   }
//   return (
//     <div id="home">
//       <Promo />
//       <Area1 />
//       <Carroussel />

//       <Area2 />

//       <div className="my-slider bg-light">
//         <div className="my-slide-track">
//           {generateWaveSVGs(15)}
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Home

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
      <div className="bg-green">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 -1 150 20">
          <defs>
            <path id="wave-template--16026570752190__collage" d="M -75 10 C -50 10 -25 0 0 0 S 50 10 75 10 S 125 0 150 0 S 200 10 225 10 V 20 H -75 Z"></path>
          </defs>

          <use xlinkHref="#wave-template--16026570752190__collage" fill="#f8f9fa" style={{ animationPlayState: 'running' }}></use>
        </svg>
      </div>
    </div>
  )
}

export default Home