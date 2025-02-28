import React from "react";
import image from "./../assets/mission.png";

function OurMission(){
    return(
        <>
        <div className="mission">
            <h1>Our Mission</h1>
            <p>At our core, we aim to deliver exceptional products with unmatched,
                 focusing on sustainability and community impact
            </p>
            <img src={image} alt=""/>
            <br/>
            <button>Find out more</button>
        </div>
        </>
    )
}
export default OurMission