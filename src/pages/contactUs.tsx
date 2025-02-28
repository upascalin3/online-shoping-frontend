import React from "react";
import Navbar from "../components/navbar";
import Contact from "../components/conatct";
import Form from "../components/form";
import Location from "../components/location";
import GetApp from "../components/getApp";
import Footer from "../components/footer";

function ContactUs(){
    return(
        <>
        <Navbar/>
        <Contact/>
        <Form/>
        <Location/>
        <GetApp/>
        <Footer/>
        </>
    )
}
export default ContactUs