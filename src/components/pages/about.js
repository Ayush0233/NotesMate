import React from 'react'
import Pageheading from './Pageheading'
import "./about.css"
import Footer from '../footer'
const About = () => {
  return (
    <div className="container-fluid" id='x'>
      <div class="row  cardsection justify-content-center" id="fieldcards">
        <Pageheading heading={"About Us"} />
        <div className='innerDiv'>
          <h2>Overview</h2>
          <p>Welcome to our educational platform, designed exclusively for university students seeking convenience and efficiency in their exam preparations. At our website, we aim to streamline the learning process by providing a comprehensive repository of educational notes from various disciplines, all accessible through a single, user-friendly platform. Gone are the days of frantic searching and scattered resources; here, students can easily locate and access the study materials they need to excel in their exams. Our mission is to empower students with the tools they require to succeed academically, promoting a stress-free and focused approach to learning. Join us on this journey towards academic excellence, where knowledge is readily available at your fingertips.</p>
          <h2>Creating positive change</h2>
          <p className='secondPara text-center'>" We're committed to creating positive change around the world and ensuring we act as responsible business leaders for our people, our clients, and the communities we call home. "</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About