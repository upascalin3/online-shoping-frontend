import React from "react";
import Navbar from './../components/navbar';
import Introduction from './../components/intro';
import Description from './../components/description';
import BestSales from './../components/bestSales';
import Discount from './../components/discount';
import Sponsors from './../components/sponsors';
import Footer from './../components/footer';

function Home(){
    return(
        <>
        <Navbar/>
      <Introduction/>
      <Description/>
      <BestSales/>
      <Discount/>
      <Sponsors/>
      <Footer/>
        </>

    )
}
export default Home;