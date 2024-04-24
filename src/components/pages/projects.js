import React, { useEffect, useState } from 'react'
import Pageheading from './Pageheading';
import './projects.css'
import project from "../jsonfiles/project.json"
const Projects = () => {
// const [data, setData] = useState([])
// useEffect(() => {
//     // Fetch the JSON data from the external source
//     fetch("../jsonfiles/project.json")
//       .then(response => response.json())
//       .then(data => setData(data))
//       .catch(error => console.error('Error fetching data:', error));
//   }, []); // Empty dependency array to ensure useEffect runs only once
  return (
    <div className='container-fluid'>
      
      <div className="row cardsection justify-content-center project"  id='fieldcards'>
        <Pageheading heading={"Projects"}/>
        {project.map((item, index) => (
          <div className='col-md-3 projectCard' key={index}>
            <img src={item.imglink} alt="projectImG" className='img-fluid' />
            <div className='innerpro'>
            <h3>{item.title}</h3>
            <h5>
              <p>Take a look on 🪴</p>
              <i class="bi bi-github"></i>
            </h5>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <button>View</button>
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects