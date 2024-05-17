import React from 'react'
import Welcome from './welcome'
import Whygif from './whygif'
import Learnmsg from './learnmsg'
import Scrollingtxt from './scrollingtxt'
import Acceleration from './acceleration'
import Footer from './footer'
import './home.css'
import Card from './card'
import Faq from './faq'
const Home = () => {
    return (

        <div className="container-fluid" id=''>
            {/* <div class="background"></div> */}
            <Welcome />
            <Whygif />
            <Learnmsg />
            <Card/>
            <Scrollingtxt />
            {/* <Purpose /> */}
            <Acceleration />
            <Faq/>
            <Footer/>
        </div>
    )
}

export default Home