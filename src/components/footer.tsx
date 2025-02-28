import React from "react";
import logo from "./../assets/logo.png";

function Footer(){
    return(
        <div className="footer">
            <div className="logo">
            <img src={logo} alt=""/>
            <h1>ShopEase</h1>
            </div>
            <div className="email">
                <h2>Subscribe to our newsletter</h2>
                <input type="text" name="" id="" placeholder="  Input your Email"/>
                <button>Subscribe</button>
            </div>
            <div className="lists">
                <div className="list">
                    <h2>Product</h2>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Discount</p>
                </div>
                <div className="list">
                    <h2>Resources</h2>
                    <p>Blog</p>
                    <p>User guides</p>
                    <p>Webninars</p>
                </div>
                <div className="list">
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Location</p>
                </div>
                <div className="list">
                    <h2>Plan & Pricing</h2>
                    <p>Personal</p>
                    <p>Start Up</p>
                    <p>Organiszation</p>
                </div>
            </div>
            <div className="final">
            <div className="down">
                <select name="" id="">
                    <option value="">English</option>
                    <option value="">French</option>
                </select>
            </div>
            <div className="copy">
                <li>2024 Brand, Inc.</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Sitemap</li>
            </div>
            </div>
        </div>
    )
}
export default Footer;