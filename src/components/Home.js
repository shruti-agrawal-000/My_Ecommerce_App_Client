import React, { useState,useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios";
import "../style/Home.css";
import pic1 from "../images/pic1.jpg"
import logo1 from "../images/logo1.jpg"
import addToCart from "./PlaceOrder"
import addToWishlist from "./AddToWishlist";


const Home = () => {
    const [products, setProducts] = useState([]);


    useEffect(()=>{
        fetchProducts();
     },[]);

    //functions to get all the products 
    const fetchProducts = async () => {
        try {
            const productData = await axios.get("http://localhost:7000/getAllProducts");
            console.log("productData", productData.data);
            setProducts(productData.data);
        } catch (error) {
            console.log("error", error)
        }
    };

    // fetchProducts();
    return (
        <div>
            {/* <button onClick={() => { fetchProducts() }}>Get All Products</button> */}
                
           
            {

                products.map((item) => {
                    return (

                        <div className="products_display">

                            <div className="home-page">
                                {/* <h1>Home Page</h1> */}
                                <div className="product-image">
                                    <img src={logo1}></img>
                                </div>
                                <div className="product">
                                    <div>
                                        <h1 className="title">{item.title} </h1>
                                        <p className="desc">ufdywtguehlsnk nfgireutpi ,mbjgf ,feuitihpu gyitr7 feyy uwyr9er</p>
                                        <h2 className="price_tag"> <span>&#8377;</span> {item.price}</h2>

                                    </div>
                                    <div className="buttons">
                                        <button className="add" onClick={()=>addToCart(item._id)}>PLACE ORDER </button>
                                        <button className="like" onClick={()=>addToWishlist(item._id)}>WISHLIST</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })


            }
            {/* //card1 */}
            
        </div>

    )
}


export default Home;