import React from "react";
import logo from "./../assets/logo.png";
import { FiSearch } from "react-icons/fi";

function Navbar(){
    return(
        <div className="navbar">
        <div className="left">
            <img src={logo} alt=""/>
            <p className="name">ShopEase</p>
            <div className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
            </div>
        </div>
        <div className="right">
                <input type="text" name="" id="" placeholder="   Search..."/>
               <button> <FiSearch className="icon"/></button>
            <div className="buttons">
                <button className="login"><a href="/login">Login</a></button>
                <button className="signup"><a href="/signup">Signup</a></button>
            </div>
        </div>
        </div>
    )
}
export default Navbar;