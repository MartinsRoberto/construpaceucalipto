import React from 'react'
import './Projects.css'
import Um from '../../../public/images/work/03.jpg'
import Dois from '../../../public/images/work/12.jpg'
import Tres from '../../../public/images/work/25.jpg'
import Quatro from '../../../public/images/work/81.png'

const Projects = () => {
    return (

        <div className='p-5'>

            <div class="box">
                <div class="item-a">A
                    <img
                        src={Um}
                        class="w-100 shadow-1-strong rounded mb-4"
                    />
                </div>
                <div class="item-b">B
                    <img
                        src={Dois}
                        class="w-100 shadow-1-strong rounded mb-4"
                    />
                </div>
                <div class="item-c">
                    <img
                        src={Tres}
                        class="w-100 shadow-1-strong rounded mb-4"
                    />
                </div>


                <div class="item-d">

                </div>

                <div class="item-e">
                    <img
                        src={Quatro}
                        class="w-100 shadow-1-strong rounded mb-4"
                    />
                </div>
            </div>
        </div>


        // <div className='p-5'>
        //     <div class="row">
        //         <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
        //             <img
        //                 src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
        //                 class="w-100 shadow-1-strong rounded mb-4"
        //                 alt="Boat on Calm Water"
        //             />
        //             <img
        //                 src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
        //                 class="w-100 shadow-1-strong rounded mb-4"
        //                 alt="Boat on Calm Water"
        //             />
        //         </div>
        //         <div class="col-lg-4 mb-4 mb-lg-0">
        //             <img
        //                 src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
        //                 class="w-100 shadow-1-strong rounded mb-4"
        //                 alt="Mountains in the Clouds"
        //             />
        //         </div>
        //         <div class="col-lg-4 mb-4 mb-lg-0">
        //             <p className=''>OLAAAAAAAAA</p>
        //             <img
        //                 src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
        //                 class="w-100 shadow-1-strong rounded mb-4"
        //                 alt="Waves at Sea"
        //             />
        //         </div>
        //     </div>
        // </div>
    )
}

export default Projects