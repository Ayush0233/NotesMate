import React from 'react'
import "./button.css"
const Button = (props) => {
  return (
    <button className="btn " id="videoplay"><span>{props.btntxt}</span></button>
  )
}

export default Button