import React from 'react'
import './scrollingtxt.css'
const Scrollingtxt = () => {
  return (

    <div class="row" id='scrolltxt'>
      <div class="col-md-12 scrollingtxt">
        {/* <h1>Notes<span class="heading">Mate?</span></h1>
                <h1>Notes<span class="heading">Mate?</span></h1>
                <h1>Notes<span class="heading">Mate?</span></h1>
                <h1>Notes<span class="heading">Mate?</span></h1>
                <h1>Notes<span class="heading">Mate?</span></h1>
                <h1>Notes<span class="heading">Mate?</span></h1> */}
        <h1>Best <span class="heading">Thoery</span> + <span class="heading">Visual</span> Learning <span class="heading">Ever</span></h1>
        <div className="row justify-content-evenly">
          <div className="col-md-3 scrollCard ">
            <h3>HandWritten Notes</h3>
            <p>Discover the unmatched beauty of handwritten notes with NoteMate magic</p>
          </div>
          <div className="col-md-3 scrollCard">
            <h3>Excellent Categorisation</h3>
            <p>NoteSync will provide you notes properly. In about 4-5 clicks, you may access notes from NotesMate.</p>
          </div>
          <div className="col-md-3 scrollCard">
            <h3>Top Notch Videos</h3>
            <p>NoteSync will provide an unparalleled array of top-quality video resources, ensuring an immersive experience like no other.</p>
          </div>
          <div className="col-md-3 scrollCard">
            <h3>Seamless Experience</h3>
            <p>NoteSync will provide you notes properly. In about 4-5 clicks, you may access notes from NotesMate.</p>
          </div>
        </div>
      </div>
      <div className="col-md-12 " >
        <div className="row">
          <div className="col-md-4 hangingCard">
            <div>
              <h3>FAQ's</h3>
              <p>To get the solution to your query and learn more about us, please consult our FAQs.</p>
            </div>
            <p className='link'><a href="#faq">Visit →</a></p>
          </div>


        </div>

      </div>

    </div>


  )
}

export default Scrollingtxt