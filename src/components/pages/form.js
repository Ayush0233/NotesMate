import React, { useState } from 'react'
import './form.css'
import Button from '../button'
const Form = () => {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [textarea, settextarea] = useState("")
    return (
        <form class="row g-3 needs-validation justify-content-center" novalidate>
            <div class="col-md-3">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text"
                    class="form-control"
                    id="validationCustom01"
                    value={firstName}
                    onChange={(e) => {
                        setfirstName(e.target.value)
                    }}
                    required />
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text"
                    class="form-control"
                    id="validationCustom02"
                    value={lastName}
                    onChange={(e) => {
                        setlastName(e.target.value)
                    }}
                    required />
                <div class="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div class="col-md-12 textarea">
                <label for="validationTextarea" class="form-label">Your Message</label>
                <textarea class="form-control" rows="5" id="validationTextarea"
                 placeholder="Your Feedback" 
                 value={textarea}
                 onChange={(e) => {  
                    
                    settextarea(e.target.value)
                    // console.log(e.target.value)
                 }}
                 required></textarea>
                <div class="invalid-feedback">
                    Please enter a message in the textarea.
                </div>
            </div>
            <div class="col-12 textarea">
                <Button btntxt={"Submit Form"} />
            </div>
        </form>
    )
}

export default Form