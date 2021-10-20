import React from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import "../style/Signin.css";
import { useState } from "react";
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {useHistory,NavLink} from "react-router-dom"

const Signin = () => {

  let history = useHistory();

  const [loader,setLoader]= useState(false);
  //setting form data
  const [formdataa, setFromdata] = useState({
    email: "",
    password: "",
  })


  //changing value in the fields of form
  const changeFormData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFromdata({ ...formdataa, [name]: value })
  }

  //login function used on login button 
  const Login = async () => {
    setLoader(true);
    try {
      console.log("data", formdataa);
      const response = await axios.post("http://localhost:7000/signin", formdataa);
      console.log("Response", response);
      // history.push("/");
      toast.success("Login Successful!!!....")
      setLoader(false);//setting loaders

      // // accessing token from backend
      const token = response.data.token;
      console.log("tokennnn", token);
      localStorage.setItem("token", token);

      // // setting user to local storage
      const user = response.data.user;
      JSON.stringify(user);
      console.log("userrr",user);
      localStorage.setItem("user",user);

      //setting logged/signup state 
      const isLoggedIn = true;
          localStorage.setItem("isLoggedIn",isLoggedIn);
      console.log("login state", isLoggedIn);

      history.push("/");

    } catch (error) {
      console.log(error.response);

      toast.error("Login Failed....Try Again")
      setLoader(false);
    }
  }
  return (
    <div className="login-form" >
      <div className="login_heading">
        <h2>LogIn Page </h2>
      </div>

      <form>
        <div  >
          <input className="fld-one"
            type="text"
            name="email"
            value={formdataa.value}
            onChange={changeFormData}
            placeholder="Email" /></div>


        <div  >
          <input className="fld-one"
            type="text"
            name="password"
            value={formdataa.value}
            onChange={changeFormData}
            placeholder="Password" /></div>

      </form>
      <div >
        <button className="login-btn" onClick={Login}>Login</button>
       {loader ? (

         <div id="loading">

         </div>
      //    <div className="spinner-grow text-primary" role="status">
      //    <span className="sr-only">Loading....</span>
      //  </div>
       ):null
       }
       
      </div>
      <div className="extra_signup">
        <h6>Are You a New User?</h6>
        {/* <a href="#">signup</a> */}
        <NavLink  exact activeClassName="active_class" className="link" to="/Signup">Signup</NavLink>
      </div>
    </div >
  )
}

export default Signin;