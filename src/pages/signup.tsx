import React from "react";
import logo from'./../assets/logo.png';

function Signup(){
    return(
        <>
        <div className="signup-page">
            <div className="components">
                <div className="logo">
                    <img src={logo} alt=""/>
                    <h1>ShopEase</h1>
                </div>
                <form>
                    <input type="text" name="" id="" placeholder="Full Name"/>
                    <br/>
                    <input type="text" name="" id="" placeholder="Email"/>
                    <br/>
                    <input type="text" name="" id="" placeholder="Phone Number"/>     
                    <br/>
                    <input type="text" name="" id="" placeholder="Password"/>   
                    <br/>
                    <input type="checkbox" name="" id=""/>
                    <span>I agree with Terms & Conditions</span>
                    <br/>
                    <button>Sign Up</button>
                    <br/>
                    <button></button>
                </form>
            </div>
        </div>
        
        </>
    )
}
export default Signup