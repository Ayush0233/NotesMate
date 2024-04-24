import React from 'react'
import "./card.css"
import notes from './images/Notes-bro.png'
import media from './images/Press pause-bro.png'
import project from './images/Organizing projects-amico.png'
const Card = () => {
  return (
    <div className="row justify-content-evenly" id='card'>
        <div className="col-md-3 shortCard">
            <p>High Quality Notes</p>
            <img src={notes} alt="HandWritten Notes" className='img-fluid' />
        </div>
        <div className="col-md-3 shortCard">
        <p>Top video Lectures</p>
        <img src={media} alt="HandWritten Notes" className='img-fluid' />
        </div>
        <div className="col-md-3 shortCard">
        <p>Projects</p>
        <img src={project} alt="HandWritten Notes" className='img-fluid' />
        </div>
    </div>
  )
}

export default Card