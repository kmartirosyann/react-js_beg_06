import React from 'react';
import { Nav,Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SortTodo from '../sortTodo/SortTodo';



export default function NavBar() {
 
    return (
    
      <Navbar bg="dark" variant="dark"className="mr-auto p-0">
      <Nav className="mr-auto">
      <NavLink  className="px-3" 
     activeStyle={{
    fontWeight: "bold",
    color: "#fff",
    backgroundColor:"#17191b"
  }} to="/" className="px-3">About</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#fff",
    backgroundColor:"#17191b"
  }} to="/signin" className="px-3">Sign in</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#fff",
    backgroundColor:"#17191b"
  }} to="/siginup" className="px-3">Sigin up</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#fff",
    backgroundColor:"#17191b"
  }} to="/todo" className="px-3">Todo</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#fff",
    backgroundColor:"#17191b"
    
  }} to="/contact" className="px-3">Contact</NavLink>
      </Nav>
     <SortTodo/>
    </Navbar>
      
    )
}

