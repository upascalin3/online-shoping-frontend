import React from "react";


function Form(){
    return(
        <>
        <div className="form">
        <h1>Contact Us</h1>
        <form action="">
            <input type="text" name="" id="" placeholder="First Name" className="name"/>
            <input type="text" name="" id="" placeholder="Last Name" className="name"/>
            <br/>
            <input type="email" name="" id="" placeholder="Email"/>
            <br/>
            <input type="phone" name="" id="" placeholder="Phone Number"/>
            <br/>
            <input type="text" name="" id="" placeholder="Message" className="message"/>
            <br/>
            <button>Send Message</button>
        </form>
        </div>
        </>
    )
}
export default Form