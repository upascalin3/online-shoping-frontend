import React from "react";
import image1 from "./../assets/img1.png";
import image2 from "./../assets/img2.png";
import image3 from "./../assets/img3.png";
import image4 from "./../assets/img4.png";
import image5 from "./../assets/img5.png";
import image6 from "./../assets/img6.png";

function FollowUs(){
    return(
        <>
        <div className="follow-us">
            <h1>Follow Us On Instagram</h1>
            <div className="page">
                <img src={image1} alt=""/>
                <p>Captured moments from our fans.</p>
                <button>View On Instagram</button>
            </div>
            <div className="page">
                <img src={image2} alt=""/>
                <p>Warp up your home with our collections.</p>
                <button>View On Instagram</button>
            </div>
            <div className="page">
                <img src={image3} alt=""/>
                <p>Our furry friend love it!</p>
                <button>View On Instagram</button>
            </div>
            <div className="page">
                <img src={image4} alt=""/>
                <p>Adventure awaits with us.</p>
                <button>View On Instagram</button>
            </div>
            <div className="page">
                <img src={image5} alt=""/>
                <p>Create memories with our products.</p>
                <button>View On Instagram</button>
            </div>
            <div className="page">
                <img src={image6} alt=""/>
                <p>Elevate your dining experience</p>
                <button>View On Instagram</button>
            </div>
        </div>
        </>
    )
}
export default FollowUs