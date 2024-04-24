import React from 'react'
import welcomegif from "./images/welcomegif.gif"
import './whygif.css'
const Whygif = () => {
  return (
    <div className="row justify-content-center" id="why">
            
            <div className="col-md-5" id="gif1">
                <img src={welcomegif} className="img-fluid gif " alt=""/>
            </div>
            <div className="col-md-5 giftxt">
                <h2 className="clip">Why Notes<span className="heading">Mate</span>...?</h2>
                <p>
                    Streamline your exam preparation with our platform, a centralized hub for all your study material
                    needs. We curate comprehensive resources, ensuring easy access to relevant materials essential for
                    exam success. Simplify your study routine and optimize your preparation with our organized and
                    user-friendly platform. Your path to exam excellence starts here.</p>
            </div>
        </div>
  )
}

export default Whygif