import React from 'react'
import './courses.css'
import Header from '../header'
import CourseGrouped from './course-grped'
import Footer from '../footer'
import Pageheading from './Pageheading'
const Courses = (props) => {
    return (
        <div class="container-fluid" id="">
            <div class="row  cardsection justify-content-center" id="fieldcards">
                <Pageheading heading={"Offered Courses"}/>
                <CourseGrouped />
            </div>
            <Footer/>
            
        </div>

    )
}

export default Courses