import React from 'react';
import { Nav,Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SortTodo from '../sortTodo/SortTodo';



export default function NavBar() {
 
    return (
    
      <Navbar bg="dark" variant="dark"className="mr-auto">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/" className="pl-3">Home</Link>
      <Link to="/signin" className="pl-3">Sign in</Link>
      <Link to="/siginup" className="pl-3">Sigin up</Link>
      <Link to="/todo" className="pl-3">Todo</Link>
      <Link to="/contact" className="pl-3">Contact</Link>
      </Nav>
     <SortTodo/>
    </Navbar>
      
    )
}


{/* <nav className="Light navbar navbar-expand-lg navbar-light bg-dark" >
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
          aria-current="page" 
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
         aria-current="page" 
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
</nav> */}
