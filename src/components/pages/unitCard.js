import React from 'react'
// import { Document, Page } from 'react-pdf'
const UnitCard = (props) => {
    return (
        <div className="col-md-2" >
            
                
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.link}</p>
                    <h5 className="card-title">{unit.title}</h5>
                                  <p className="card-text"> <a href={unit.link} target='_blank' rel="noreferrer">Read</a></p>
            
        </div>
    )
}

export default UnitCard