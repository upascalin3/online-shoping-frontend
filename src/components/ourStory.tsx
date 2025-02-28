import React from "react";
import image from "./../assets/story.png";

function OurStory(){
    return(
        <>
        <div className="our-story">
            <h1>Our story</h1>
            <img src={image} alt=""/>
            <div className="story">
                <p>Founded in 2005, our company has been committed to delivering 
                qualityproducts and exceptional servoce to our customer world wide.Our 
                Our journey began with a small team of passioonate individuals who believed 
                in th epower of e-commerceToday, we are proud to serve millions of satisfied 
                customers and continue to innovate</p>
                <button>Find out more</button>
            </div>
        </div>
        </>
    )
}
export default OurStory