import React from 'react'
import Pageheading from './Pageheading'
import Footer from '../footer'
import "./help.css"
import Form from './form'
// import Faq from './faq'
const Help = () => {
  return (
    <div className="container-fluid">
      <div class="row  cardsection justify-content-center contact" id="fieldcards">
        <Pageheading heading={"Contact NotesMate"} />
        <p className='text-center'>We appreciate your interest in NotesMate. Please select from the options below.</p>
        <h2>For General Inquiries</h2> {/* css is in about.css */}
        <div className='contactNum'>
          <h3>Call On :-</h3>
          <h4>+6566778139</h4>
          <h4>+6566778139</h4>
          <h4>+6566778139</h4>
        </div>
        <h2>For specific questions</h2>
        <div className='contactNum mailOn'>
          <h3>Mail On :-</h3>
          <h4>notesmatequery24@gmail.com</h4>
        </div>
        <h2>For specific Suggestions</h2>
          <p className='text-center mb-1'>Submit your Response Here</p>
        <div className='formSec'>
          <Form/>
        </div>
        <div className="faq ">
        {/* <Faq/> */}
        </div>
      </div>
        {/* <iframe width="300" height="200" src="https://www.youtube.com/embed/videoseries?si=KqDhaymO2FpUf5I8&amp;list=PLbtI3_MArDOn9x8DUbc-E0t9PnvrUaPs9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <Footer />
    </div>
  )
}

export default Help