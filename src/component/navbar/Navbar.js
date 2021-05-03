import { Button } from 'react-bootstrap';
import React from 'react';
import { Nav,Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import SortTodo from '../sortTodo/SortTodo';
import classes from './navBar.module.css';
import { withRouter } from 'react-router-dom';




 function NavBar({history}) {
 const [state, setstate] = React.useState(false)
 const onOpenNavbar = ()=>{
  setstate(!state)
 }
    return (
    <>
      <Navbar bg="dark" variant="dark"className={`mr-auto p-0 ${classes.navlinkLong}`}>
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
  }} to="/signin" className="px-3">Sigin up</NavLink>
      <NavLink activeStyle={{
    fontWeight: "bold",
    color: "#fff",
    backgroundColor:"#17191b"
  }} to="/siginup" className="px-3">Sign in</NavLink>
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
    {history.location.pathname === "/todo" &&  <SortTodo/>}
    </Navbar>
    <div id="list-example" className={`list-group ${classes.navlinkMobale}`}>
      <Button onClick={onOpenNavbar}> <i className="bi bi-justify p-3"></i></Button>
  {state && <div className={classes.boxMobale}>
  <NavLink  to="/" className="list-group-item list-group-item-action" >About</NavLink>
  <NavLink to="/signin" className="list-group-item list-group-item-action" >Sign in</NavLink>
  <NavLink to="/siginup" className="list-group-item list-group-item-action">Sigin up</NavLink>
  <NavLink to="/todo" className="list-group-item list-group-item-action" >Todo</NavLink>
  <NavLink to="/contact" className="list-group-item list-group-item-action" >Contact</NavLink>
  </div>}
</div>
     </> 
    )
}

export default withRouter(NavBar)