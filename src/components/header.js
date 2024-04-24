import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import logo from './images/logo.png'
const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg" id="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} className="img-fluid" alt="NOTESMATE" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mb-1 ms-auto mb-lg-0">
                            {/* <li className="nav-item">
                        <a className="" aria-current="page" href="https://forms.visme.co/formsPlayer/g76dm81x-company-blog-subscription"><button className="JoinBtn">Sign Up</button></a>
                    </li> */}
                            <li className="nav-item">
                                <Link className="nav-link  " aria-current="page" to="/" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="about.html" to="/about">About</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " href="fields.html" role="button" aria-expanded="false" to="/courses" >Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/projects' >Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to='/help' >Help</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header