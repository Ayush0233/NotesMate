import React from 'react'
import './faq.css'
const Faq = () => {
  return (
    <div className="row justify-content-center" id='faq'>
      <div className="col-md-8">
        <h1 className='text-center fw-bolder '>FAQ's</h1>
      <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Why use NotesMate for exam preparation ?
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">It is the only platform which provide high quality notes for last minute exam prepration,with just few clicks. Also provide video lectures from the top educator.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Do NotesMate provide handwritten notes ?
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">Yes, some of the notes are handwritten, and some are created using various online platforms.</div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Does NotesMate have any mobile Application ?
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">No, we don not have any mobile application till date. </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
          From which platform are the video lectures available ?
          </button>
        </h2>
        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
          <div className="accordion-body">We are using Youtube playlists, through which student can easily find the required videos for the particular topic.</div>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Faq