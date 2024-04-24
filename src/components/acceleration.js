import React from 'react'
import './acceleration.css'
import gif from './images/Exams-rafiki.png'
const Acceleration = () => {
  return (
    <div class="row AccelerateSection">
    <div class="col-md-5" id="AccelerateSection">
        <h2>Accelerate Your <span class="heading">Preparation</span>  with Notes<span class="heading">Mate</span> Solutions!</h2>
        {/* <a href="bca.html"><button class="btn"><span>Get Started →</span></button></a>
        <a href="bca1.html"><button class="btn"><span>Get Started →</span></button></a> */}
    </div>
    <div class="col-md-5">
        <img src={gif} class="img-fluid AccelerateGif" alt=""/>
    </div>
</div>
  )
}

export default Acceleration