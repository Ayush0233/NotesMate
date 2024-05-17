// import React from 'react'
// // import UnitCard from './unitCard'
// import bcafifth from "../jsonfiles/bcafifthsem.json"

// const Bca = () => {

//   return (
//     <div className="container-fluid">
//       <div class="row  cardsection justify-content-center" id="fieldcards">
//             <CourseName CourseName={"BCA"}/>
//             {
//               bcafifth && bcafifth.map( record =>{
//                 return(
//                   <div className='card' key={record.title}>
//                     <strong>{record}</strong>
//                   </div>
//                 )
//               } )
//             }
//         </div> 
//     </div>
//   )
// }
// export default Bca

import React from 'react';
import CourseName from './CourseName'
import './bca.css'

import JSONRenderer from './jsonRender';

const Bca = () => {
  return (
    <div className="container-fluid">
      <div class="row  cardsection justify-content-center" id="fieldcards">
        <CourseName CourseName={"BCA"} />
        <JSONRenderer />
      </div>
    </div>
  )
}

export default Bca

