import React from 'react'
import { NavLink } from 'react-router-dom'



export default function Navbar() {
    return (

<nav className="primary navbar navbar-expand-lg navbar-light bg-dark" >
  <div className=" primary container-fluid">
    <NavLink className="navbar-Light" to= '/'>Home</NavLink>    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/signin">Signin</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/siginup">Siginup</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/todo">Todo</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>



      
    )
}
