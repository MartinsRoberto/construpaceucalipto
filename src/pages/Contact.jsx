import Area1Contact from "../components/Contact/Area1Contact"
import Area2Contact from "../components/Contact/Area2Contact"

const Contact = () => {
  return (
    <div id="contact">
      <Area1Contact />
      <Area2Contact />
      <div>
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 -1 150 20">
          <defs>
            <path id="wave-template--16026570752190__collage" d="M -75 10 C -50 10 -25 0 0 0 S 50 10 75 10 S 125 0 150 0 S 200 10 225 10 V 20 H -75 Z"></path>
          </defs>

          <use xlinkHref="#wave-template--16026570752190__collage" fill="#f9f8fa" style={{ animationPlayState: 'running' }}></use>
        </svg>
      </div>
    </div>
  )
}

export default Contact