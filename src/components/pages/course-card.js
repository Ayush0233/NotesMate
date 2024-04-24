import React from 'react'
import './course-card.css'
import { Link } from 'react-router-dom'
const CourseCard = (props) => {
    return (
        <div class="col-md-2 mx-1 fieldcards ">
            <h4>{props.course}</h4>
            <img src={props.img} class="img-fluid" alt="" />
            <Link to={`/courses/${props.road}`} ><i class="bi bi-fast-forward-circle"></i></Link>
        </div>
    )
}

export default CourseCard