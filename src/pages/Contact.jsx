import Area1Contact from "../components/Contact/Area1Contact"
import Area2Contact from "../components/Contact/Area2Contact"

const Contact = () => {
  return (
    <div id="contact">
      <Area1Contact />
      <Area2Contact />
      <div className='waves'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={{
            margin: 'auto',
            display: 'block',
            zIndex: 1,
            position: 'relative',
          }}
          width="1920"
          height="200"
          preserveAspectRatio="xMidYMid"
          viewBox="0 0 1920 200"
        >
          <g transform="translate(960,100) scale(1,-1) translate(-960,-100)">
            <linearGradient id="lg-0.9724606052957976" x1="0" x2="1" y1="0" y2="0">
              <stop stopColor="#000000" offset="0"></stop>
              <stop stopColor="#000000" offset="1"></stop>
            </linearGradient>
            <path d="" fill="#F8F9FA" opacity="1">
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                keyTimes="0;0.333;0.667;1"
                calcMode="spline"
                keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
                begin="0s"
                values="M0 0L 0 150.29704391109598Q 192 195.8083952088205  384 174.1080682008757T 768 166.33782997304436T 1152 175.9655933019028T 1536 151.2341554852163T 1920 179.63562164921575L 1920 0 Z;M0 0L 0 172.05066005629118Q 192 221.4687971409018  384 178.9813158336402T 768 149.5638678736687T 1152 153.9754355728785T 1536 154.41579040052466T 1920 161.987088293331L 1920 0 Z;M0 0L 0 164.25691871363438Q 192 211.70278184948882  384 169.18642752765243T 768 170.4153463651155T 1152 168.28880226944517T 1536 167.672218243497T 1920 155.64665165130896L 1920 0 Z;M0 0L 0 150.29704391109598Q 192 195.8083952088205  384 174.1080682008757T 768 166.33782997304436T 1152 175.9655933019028T 1536 151.2341554852163T 1920 179.63562164921575L 1920 0 Z"
              ></animate>
            </path>
          </g>
        </svg>
      </div>
    </div>
  )
}

export default Contact