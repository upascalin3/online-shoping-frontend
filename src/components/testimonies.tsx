import React from "react";
import { FaStar } from "react-icons/fa6";
import person1 from"./../assets/pers1.png";
import person2 from"./../assets/pers2.png";
import { FaCircleChevronRight,FaCircleChevronLeft } from "react-icons/fa6";

function Testimonials(){
    return(
        <>
        <div className="testimonies">
            <h1>Hear from our awesome users!</h1>
            <div className="user">
                <img src={person1} alt=""/>
                <div className="name">
                    <h2>Emily Johnson</h2>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                </div>
                <p>Amazing service, quick derively!</p>
            </div>
            <div className="user">
            <img src={person2} alt=""/>
                <div className="name">
                    <h2>Micheal Brown</h2>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                </div>
                <p>Great products at affordable prices.</p>
            </div>
            <div className="user">
            <img src={person1} alt=""/>
                <div className="name">
                    <h2>Sophia Martinez</h2>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                    <FaStar className="icon"/>
                </div>
                <p>Customer support was very helpful</p>
            </div>
            <br/>
            <div className="sliders">
            <FaCircleChevronLeft  className="slider"/>
            <FaCircleChevronRight className="slider"/>
            </div>
        </div>
        </>
    )
}
export default Testimonials