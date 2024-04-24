import React from 'react'
import './learnmsg.css'
import learnBg from "./images/Learning-made-easier.webp"
const Learnmsg = () => {
  return (
    <div className="row" id="EasyLearning">
            <img data-scroll data-scroll-speed="2" src={learnBg} className="img-fluid learnbg" alt=""/>
            <div className="col-md-12" id="secondsection">
                <section id="innersecond">
                    <h2>Learning Made <span className='heading'>Easier</span></h2>
                    <h6>No more <span className="heading">wandering</span> for exam preparation.</h6>
                </section>
            </div>
        </div>
  )
}

export default Learnmsg