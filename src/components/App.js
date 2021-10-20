import React from "react";
import ReactDom from "react-dom";
import Header from "../components/Header";
import Signup from "../components/Signup";
import Signin from "./Signin";
import Home from "./Home";
import Myorders from "./Myorders";
import Mywishlist from "./Mywishlist";
import Products from "./Products";
import Footer from "./Footer"
import Loaders from "./Loaders";
import { ToastContainer } from 'react-toastify';
import PlaceOrder from "./PlaceOrder";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">

      {/* toaster used .... */}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />


      {/* <h2>Jewellary Store</h2> */}
      {/* <Header /> */}
      {/* <Signup/>  */}
      {/* <Signin /> */}
      {/* <Home/> */}
      {/* <Myorders/> */}
      {/* <Mywishlist/> */}
      {/* <Loaders/> */}
      {/* <Products/> */}
      {/* <PlaceOrder/> */}

      {/* <Footer /> */}
      <>
      <Header/>
        <Switch>
          
          <Route path='/' component={Home} exact={true}/>
          <Route path='/signup' component={Signup} />
          <Route path='/signin' component={Signin} />
          <Route path='/myorders' component={Myorders} />
          <Route path='/mywishlist' component={Mywishlist} />
         
        </Switch>
        <Footer/>
      </>
    </div>
  )
}

export default App;