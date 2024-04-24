import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div class="row justify-content-center" id='footerSec'>
            <div class="col-md-10" id="footer">
                <hr class="new" />
                <footer class="">

                    <div class="col-md-2 links">
                        <h4>Quick links</h4>
                        <ul>
                            <li><a href="#" class="nav-link-footer ">Higher Education</a></li>
                            <li><a href="#" class="nav-link-footer ">UG Courses</a></li>
                            <li><a href="#" class="nav-link-footer ">Blogs</a></li>
                            <li><a href="#" class="nav-link-footer ">Testimonals</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#" class="nav-link-footer ">About Us</a></li>
                            <li><a href="#" class="nav-link-footer ">Contact Us</a></li>
                            <li><a href="#" class="nav-link-footer ">Help</a></li>
                            <li><a href="#" class="nav-link-footer ">Creators</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 links">
                        <h4>Policies</h4>
                        <ul>
                            <li><a href="#" class="nav-link-footer ">Terms of Use</a></li>
                            <li><a href="#" class="nav-link-footer ">Privacy Notice</a></li>
                            <li><a href="#" class="nav-link-footer ">Cookie Policy</a></li>
                            <li><a href="#" class="nav-link-footer ">Usage Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 links">
                        <h4>Social Links</h4>
                        <ul>
                            <li><a href="#" class="nav-link-footer "><i class="bi bi-facebook"></i> Facebook</a></li>
                            <li><a href="#" class="nav-link-footer "><i class="bi bi-instagram"></i> Instagram</a></li>
                            <li><a href="#" class="nav-link-footer "><i class="bi bi-linkedin"></i> LinkedIn</a></li>
                            <li><a href="#" class="nav-link-footer "><i class="bi bi-twitter-x"></i> Twitter-X</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>


    )
}

export default Footer