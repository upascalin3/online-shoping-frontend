import React from "react";
import product1 from './../assets/product9.png';
import product2 from './../assets/product10.png';
import product3 from './../assets/product11.png';
import product4 from './../assets/product12.png';
import product5 from './../assets/product13.png';
import product6 from './../assets/product14.png';
import product7 from './../assets/product15.png';
import product8 from './../assets/product16.png';
import product9 from './../assets/product17.png';
import product10 from './../assets/product18.png';
import product11 from './../assets/product19.png';
import product12 from './../assets/product20.png';

function Product(){
    return(
        <div className="products">
            <input type="text" name="" id="" placeholder=" Search..."/>
        <div className="best-sales">
        <div className="product">
            <img src={product1} alt=""/>
            <h3>Leather Wallet</h3>
            <p>Classic leather wallet</p>
            <p>$45.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product2} alt=""/>
            <h3>Running Shoes</h3>
            <p>Blue Running Shoes</p>
            <p>$85.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product3} alt=""/>
            <h3>Water Bottle</h3>
            <p>Stainless Steal Bottle</p>
            <p>$25.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product4} alt=""/>
            <h3>Wool Scarf</h3>
            <p>Knitten Wool Scarf</p>
            <p>$30.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product5} alt=""/>
            <h3>Cooking Spoons</h3>
            <p>Wooden Cooking Spoons</p>
            <p>$15.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product6} alt=""/>
            <h3>Backpack</h3>
            <p>Black Multi-Pocket Backpack</p>
            <p>$70.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product7} alt=""/>
            <h3>Wristwatch</h3>
            <p>Leather Strap Watch</p>
            <p>$120.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product8} alt=""/>
            <h3>Sunglasses</h3>
            <p>Poralized Sunglasses</p>
            <p>$60.00</p>
            <button>Add to cart</button>
        </div>
    <div className="product">
            <img src={product9} alt=""/>
            <h3>Coffe Mugs</h3>
            <p>Ceramic Coffee Mug</p>
            <p>$40.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product10} alt=""/>
            <h3>Speaker</h3>
            <p>Bluetooth SPeaker</p>
            <p>$55.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product11} alt=""/>
            <h3>Notebook</h3>
            <p>Vintage Notebook</p>
            <p>$12.00</p>
            <button>Add to cart</button>
        </div>
        <div className="product">
            <img src={product12} alt=""/>
            <h3>Teddy Bear</h3>
            <p>Plush Tedy Bear</p>
            <p>$25.00</p>
            <button>Add to cart</button>
        </div>
    </div>
        </div>
    )
}
 export default Product
