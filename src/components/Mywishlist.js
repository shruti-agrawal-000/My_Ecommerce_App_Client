import axios from "axios";
import React, { useState,useEffect } from "react";
import ReactDom from "react-dom";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo1 from "../images/logo1.jpg"


const Mywishlist = () => {

    const [wishlist, setWishlist] = useState([]);

    useEffect(()=>{
        fetchWishlist();
     },[]);

    const fetchWishlist = async () => {
        try {

            const Token = localStorage.getItem("token");
            console.log("token coming from localstorsge", Token)

            const loggedIn = localStorage.getItem("isLoggedIn");
            console.log(loggedIn);

            const wishlistData = await axios.get("http://localhost:7000/myWishlist", { headers: { "Authorization": `Bearer ${Token}` } });
            console.log("api called")
            console.log("wishlistdata", wishlistData.data);
            setWishlist(wishlistData.data);
            toast.success("My Wishlish Fetched Successfully")
            console.log(wishlist)
        } catch (error) {
            console.log("errorrr", error);
            toast.error("Error in Fetching Wishlist")
        }
    }

    // return(

    // )
    return (
        <div>
            {/* <div>
                <button onClick={() => fetchWishlist()}>wishlist</button>
            </div> */}
            {
                wishlist.map((item) => {
                    return (
                        <div>
                            {/* //card1 */}
                            <div className="home-page">
                                {/* <h1>Home Page</h1> */}
                                <div className="product-image">
                                    <img src={logo1}></img>
                                </div>
                                <div className="product">
                                    <div>
                                        <h1 className="title">{item.product.title} </h1>
                                        <p className="desc">{item.product.desc}</p>
                                        <h2><span>&#8377;</span> {item.product.price}</h2>

                                    </div>
                                    <div className="buttons">
                                        <button className="add">ADD TO CART </button>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Mywishlist;