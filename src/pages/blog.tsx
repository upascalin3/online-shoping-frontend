import React from "react";
import Navbar from "../components/navbar";
import BlogIntro from "../components/blogIntro";
import OurBlog from "../components/ourBlog";
import FollowUs from "../components/followUs";
import Footer from "../components/footer";

function Blog(){
    return(
       <>
        <Navbar/>
        <BlogIntro/>
        <OurBlog/>
        <FollowUs/>
        <Footer/>
       </>
    )
}
export default Blog