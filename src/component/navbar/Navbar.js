import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Navbar() {
    return (

<nav className="Light navbar navbar-expand-lg navbar-light bg-dark" >
  <div className=" Light container-fluid">
    <NavLink 
    className="navbar-Light" 
     activeStyle={{
    fontWeight: "bold",
    color: "#fff"
  }} to= '/'>Home</NavLink>    
    <div className=" Light container-fluid container-sm" id="navbarNav">
      <ul className=" navbar-nav">
        <li className="nav-item">
          <NavLink 
          className=" Light nav-link active"
           activeStyle={{
            fontWeight: "bold",
            color: "#fff"
          }}
           aria-current="page" to="/signin">Signin</NavLink>
        </li>
        <li className="nav-item">
        <NavLink 
        className="Light nav-link active"
        activeStyle={{
          fontWeight: "bold",
          color: "#fff"
        }}
         active aria-current="page" 
         to="/siginup"
         >
           Siginup
         </NavLink>
        </li>
        <li className="nav-item">
        <NavLink 
        className="Light nav-link active"
        activeStyle={{
          fontWeight: "bold",
          color: "#fff"
        }} 
        active aria-current="page" 
        to="/todo"
        >
          Todo
          </NavLink>
        </li>
        <li className="nav-item">
        <NavLink 
        className="Light nav-link active" 
        activeStyle={{
          fontWeight: "bold",
          color: "#fff"
        }}
        aria-current="page" 
        to="/contact"
        >
          Contact
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>



      
    )
}
