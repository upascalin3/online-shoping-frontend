import React from "react";
import product1 from './../assets/product1.png';
import product2 from './../assets/product2.png';
import product3 from './../assets/product3.png';
import product4 from './../assets/product4.png';
import product5 from './../assets/product5.png';
import product6 from './../assets/product6.png';
import product7 from './../assets/product7.png';
import product8 from './../assets/product8.png';

function BestSales(){
return(
    <div className="best-sales">
        <h1>Best Selling</h1>
        <p className="sub-title">Discover our top-selling products</p>
        <div className="product">
            <img src={product1} alt=""/>
            <h3>iPhone 14 Pro</h3>
            <p>Price: $999</p>
            <p>Discount: 10% off</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product2} alt=""/>
            <h3>Galaxy S22</h3>
            <p>Price: $799</p>
            <p>Discount: 15% off</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product3} alt=""/>
            <h3>Sony Headphones</h3>
            <p>Price: $349</p>
            <p>Discount: 20% off</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product4} alt=""/>
            <h3>Dyson V11</h3>
            <p>Price: $599</p>
            <p>Discount: 5% off</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product5} alt=""/>
            <h3>MacBook Pro 16</h3>
            <p>Price: $2,499</p>
            <p>Discount: 7% off</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product6} alt=""/>
            <h3>Switch OLED</h3>
            <p>Price: $349</p>
            <p>Discount: 10% off</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product7} alt=""/>
            <h3>Fitbit Charge 5</h3>
            <p>Price: $129</p>
            <p>Discount: 20% off</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product8} alt=""/>
            <h3>Bose Earbuds</h3>
            <p>Price: $279</p>
            <p>Discount: 5% off</p>
            <button>Add to cart</button>
        </div>
    </div>
)
}
export default BestSales