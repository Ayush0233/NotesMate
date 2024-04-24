import React from 'react'
import "./course-grped.css"
import CourseCard from './course-card'
import Ai from "../images/AI.apng"
import CSE from "../images/cse.apng"
import bca from "../images/bca.apng"
import civil from "../images/civil.apng"
import bba from "../images/bba.apng"
import electrical from "../images/electrical.apng"
import Mechanical from "../images/mechanical.apng"
import pharmacy from "../images/pharmacy.apng"
import electronics from "../images/electronics.apng"
import cyber from "../images/cybersecurity.apng"

const CourseGrouped = () => {
  return (
    <div class="col-md-11">
        <div class="row justify-content-evenly fieldcard">
            <CourseCard course={"CSE"} img={CSE} road={"cse"} />
            <CourseCard course={"BCA"} img={bca} road={"bca"} />
            <CourseCard course={"AI"} img={Ai}/>
            <CourseCard course={"Electrical"} img={electrical}/>
            <CourseCard course={"Electronics"} img={electronics}/>
            <CourseCard course={"Civil"} img={civil}/>
            <CourseCard course={"BBA"} img={bba}/>
            <CourseCard course={"Mechanical"} img={Mechanical}/>
            <CourseCard course={"CyberSecurity"} img={cyber} />
            <CourseCard course={"Pharmacy"} img={pharmacy } />

        </div>
    </div>
  )
}

export default CourseGrouped