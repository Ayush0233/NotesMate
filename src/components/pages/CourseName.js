import React from 'react'
import './CourseName.css'
const CourseName = (props) => {
    return (
        <div class="col-md-10 courseName">
            <h1 class="text-center mb mt-4 ">{props.CourseName}</h1>
            
        </div>
    )
}

export default CourseName