import React from "react";
import image1 from "./../assets/blog1.png"
import image2 from "./../assets/blog2.png"
import image3 from "./../assets/blog3.png"

function OurBlog(){
    return(
        <>
        <div className="our-blog">
            <h1>Our Blog</h1>
            <p>Latest updates and news from our e-commerce platform</p>
            <div className="news">
                <div className="content">
                    <h2>Office Design</h2>
                    <p>Published on October 15, 2023.<br/> Explore the innovative design of our new office space and how it enhances creativity and collaboration</p>
                    <button>Read More</button>
                </div>
                <img src={image1} alt=""/>
            </div>
            <div className="news">
                <div className="content">
                    <h2>Eco Packaging</h2>
                    <p>Published on October 10, 2023.<br/> Discover our journey towards sustainable packaging and how it benefits the environment</p>
                    <button>Read More</button>
                </div>
                <img src={image2} alt=""/>
            </div>
            <div className="news">
                <div className="content">
                    <h2>Marketing Insights</h2>
                    <p>Published on October 5, 2023.<br/> Unveilling our latest marketing strategies to reach a wider audience and drive growth</p>
                    <button>Read More</button>
                </div>
                <img src={image3} alt=""/>
            </div>
        </div>
        
        </>
    )
}
export default OurBlog
