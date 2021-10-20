import axios from "axios";
import React, { useState,useEffect} from "react";
import ReactDOM from "react-dom"
import "../style/Myorders.css"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Myorders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    fetchOrders();
 },[]);




  //function to get orders details
  const fetchOrders = async () => {
    // const[orders,setOrders] = useState([]);

    try {
      const Token = localStorage.getItem("token");
      console.log("token coming from localstorsge", Token)

      const loggedIn = localStorage.getItem("isLoggedIn");
      console.log(loggedIn)
      //  if(loggedIn === true){

      const orderData = await axios.get("http://localhost:7000/myOrders", { headers: { "Authorization": `Bearer ${Token}` } })
      console.log("orderDataaaa", orderData.data);
      setOrders(orderData.data)
      toast.success("My oreders Fetched")
      //  }
    } catch (error) {
      console.log("errorrr", error)
      toast.error("fetching failed");
    }

  };

  return (
    <div>
      {/* <div>
        <button onClick={() => { fetchOrders() }}>Myorders</button>
      </div> */}
      <div>
        <ul class="responsive-table">
          <li class="table-header">
            <div class="col col-1">Product Id</div>
            <div class="col col-2">Product Name</div>
            <div class="col col-3">Amount Due</div>
            <div class="col col-4">Delivery Status</div>
          </li>
        </ul>
      </div>
      {
        orders.map((item) => {

          return (
            <div>
              {/* <h2 className="table-heading">Table To Show Orders</h2> */}
              <div className="table-container">

                <div>
                  <ul class="responsive-table">

                    <li class="table-row">
                      <div class="col col-1" data-label="Product Id">djgdgdulj678668896</div>
                      <div class="col col-2" data-label="Product Name">John Doe</div>
                      <div class="col col-3" data-label="Amount">&#8377;350</div>
                      <div class="col col-4" data-label="Delivery Status">Pending</div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  
  )
}

export default Myorders;

