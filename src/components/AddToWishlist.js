import React from "react";
import axios from "axios";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";


const addToWishlist = async(product_id) => {
    
    //Accessing token 
    const Token = localStorage.getItem("token");
       console.log("token coming from localstorsge",Token);
       try {
           const response = await axios.post(`http://localhost:7000/addToWishlist?productId=${product_id}`,{},{headers : {"Authorization" : `Bearer ${Token}`}});
           toast.success("added to wishlist");
           console.log("response",response);
       } catch (error) {
           console.log("error",error)
           toast.error("Something Went Wrong")
       }
}

export default addToWishlist;