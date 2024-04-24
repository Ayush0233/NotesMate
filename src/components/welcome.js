import React from 'react'
import "./welcome.css"
// import gif1 from "./images/Programmer-pana.png"
import gif2 from "./images/Online world-amico.png"

import Button from './button'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <>
    <div className="row" id="intro">

            {/* <video src="./elements/welcomevideo.mp4" autoplay muted loop id="welcomeVideo"></video> */}
            <div className="col-md-12" id="welcometxt">
                <h1 className="welcomeComponent"><span className="clip">Notes<span className="heading">Mate</span></span></h1>
                <p>Education is not just about learning facts, but training the mind to think.</p>
                <p className="guide">This is your Virtual Guide for your Exam Preparation</p>
                <Link to="/courses"><Button btntxt={"Get Started →"}/></Link>
                {/* <img src={gif1} className='img-fluid img1' alt='Gif'/> */}
                <img src={gif2} className='img-fluid img2'alt='gif' />
                
            </div>
        </div>
        </>
  )
}

export default Welcome
