import axios from "axios";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import "../style/Signup.css"
import { NavLink, useHistory } from "react-router-dom";
import Signin from "./Signin"

import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {


    let history = useHistory();
    const [loaders, setLoaders] = useState(false)
    const [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            address: "",
        }
    );






    const changeFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({ ...formData, [name]: value })
    }

    //calling the signup api and saving the data to db

    const addUser = async () => {
        setLoaders(true)
        try {
            console.log("sdddd")
            console.log("formData", formData);
            // if(!formData){
            //     console.log("Something went wrong");
            //     toast.error("Something went wrong");
            // }
            const response = await axios.post("http://localhost:7000/signup", formData);
            console.log("response", response);
            // toast.success("signUp Successfull  !!!")
            // setLoaders(false)





            const userType = response.data.user.userType;
            if (userType === "user") {
                history.push("/");
                toast.success("Successfully signed up");

                // // accessing token from backend
                const token = response.data.token;
                console.log("tokennnn", token);
                localStorage.setItem("token", token);

                // // setting user to local storage
                const user = response.data.user;
                JSON.stringify(user);
                localStorage.setItem("user", user);
                console.log("userrr", user);

                //setting logged/signup state 
                const isLoggedIn = true;
                localStorage.setItem("isLoggedIn", isLoggedIn);
                console.log("signup state", isLoggedIn);
            }
            else {
                toast.error("error in signing up")
            }
            setLoaders(false)
        } catch (error) {
            setLoaders(false);
            console.log("errror", error);

            toast.error("Signup Failed...!!!");

        }
    }
    return (

        <div className="form_container">
            <h2 className="signup_heading">Sign Up</h2>
            <div className="form">
                <form>

                    {/* <label className="text">  Name :</label>  */}

                    <input type="text"
                        name="name"
                        value={formData.value}
                        onChange={changeFormData}
                        placeholder="your name..." />

                    {/* <label className="text"> Email :</label>  */}

                    <input type="text"
                        name="email"
                        value={formData.value}
                        onChange={changeFormData}
                        placeholder="your email..." />

                    {/* <label className="text">  Password :</label> */}
                    <input type="text"
                        name="password"
                        value={formData.value}
                        onChange={changeFormData}
                        placeholder="your password..." />

                    {/* <label className="text">Phone Number : </label>   */}
                    <input type="text"
                        name="phoneNumber"
                        value={formData.value}
                        onChange={changeFormData}
                        placeholder="your number..." />

                    {/* <label className="text"> Address :</label>  */}
                    <input type="text"
                        name="address"
                        value={formData.value}
                        onChange={changeFormData}
                        placeholder="your address..." />

                    <button type="button" onClick={() => { addUser() }} className="btn">SignUp</button>
                    {loaders ? (

                        <div id="loading">

                        </div>
                        //    <div className="spinner-grow text-primary" role="status">
                        //    <span className="sr-only">Loading....</span>
                        //  </div>
                    ) : null
                    }
                </form>
            </div>
            <div className="signup_login">
                <h5>Already a User</h5>
                {/* <a href="#"> Login</a> */}
                <NavLink exact activeClassName="active_class" className="link" to="/Signin">Login</NavLink>
               
            </div>
        </div>

    )

}

export default Signup;
