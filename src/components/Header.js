import React from "react";
import ReactDOM from "react-dom";
import logo from "../images/logo2.png";
import "../style/Header.css"
// import {useHistory} from "react"
import { Link, NavLink,useHistory} from "react-router-dom"


// console.log(logo);
function Header() {
    //  localStorage.getItem("isLoggedIn")
    const history = useHistory();

    function Logout (){
        localStorage.clear();
        history.push('/')
        console.log("clearrr")

    }
    return (
        <div className="container">

            <img className="logo" src={logo} alt="logo" />
            <div className="links">

                    <NavLink exact activeClassName="active_class" className="link" to="/">Home</NavLink>
                    <NavLink  exact activeClassName="active_class" className="link" to="/Signup">Signup</NavLink>
                    <NavLink exact activeClassName="active_class" className="link" to="/Signin">Login</NavLink>
                    <NavLink exact activeClassName="active_class" className="link" to="/Myorders">Myorders</NavLink>
                    <NavLink exact activeClassName="active_class" className="link" to="/Mywishlist">Mywishlist</NavLink>

                  {/* <Link to ='/'> HOME </Link>
                 <Link to = '/signup'> Signup</Link> */}

                 {/* <a className="link" href="/">Home</a>
                  <a className="link" href="/signup">Sign Up</a>
                  <a className="link">Log In</a> */}
                 {localStorage.getItem("isLoggedIn")? 
                   <div>
                   <NavLink onClick={() => Logout()}>Logout</NavLink>
                   </div>
                   :null
                   }



            </div>

        </div>
    )
}

export default Header;