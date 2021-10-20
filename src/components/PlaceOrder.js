import axios from "axios";
import { useEffect } from "react";
import React  from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
// import {useEffect} from "react"
// const PlaceOrder = () =>{
     

    // useEffect(()=>{
    //     addToCart();
    //  },[]);

    const addToCart = async(product_id) => {

        console.log("iddd",product_id);

        const Token = localStorage.getItem("token");
       console.log("token coming from localstorsge",Token)

    

      try {
        console.log("api startted ")
          const response = await axios.post(`http://localhost:7000/placeOrder?productId=${product_id}`,
          {},{headers : {"Authorization" : `Bearer ${Token}`}});
          console.log("place order api hitted")
          toast.success("Order Placed Successfully");
          console.log("response",response)
        //   const _id  = response.data.product._id;
        //   console.log("id!!",_id);
      
      } catch (error) {
          console.log("errorrrr",error);
          toast.error("Something Went Wrong")
      }
    }
//  return(
//      <div>
//         {/* <button onClick={() => { addToCart() }}>Cart</button> */}
//      </div>
//  )
// }

// export default PlaceOrder;
export default addToCart;