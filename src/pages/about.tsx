import React from "react";
import Navbar from './../components/navbar'
import AboutIntro from './../components/introduction'
import OurStory from './../components/ourStory'
import OurMission from './../components/mission'
import Testimonials from './../components/testimonies'
import GetinTouch from './../components/inTouch'
import Footer from './../components/footer'

function AboutUs(){
    return(
        <>
        <Navbar/>
      <AboutIntro/>
      <OurStory/>
      <OurMission/>
      <Testimonials/>
      <GetinTouch/>
      <Footer/>
        </>
    )
}
export default AboutUs