import TodoFunction from "./component/todo/TodoFunction";
import NavBar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./component/home/Home";
import Signin from "./component/login/Signin";
import SiginUp from "./component/login/SiginUp";
import NotFoutnd from "./component/notFound/NotFoutnd";
import SinglPach from "./component/singlPach/SinglPach";
import SortdataModalTodo from './component/modal/SortDataModalTodo'
import Contact from "./component/contact/Contact";
import { MovieProvider } from "./component/context/MovieContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import React from "react";
import { connect } from "react-redux";


function App({
  errMessage,
  successMessage,
  successContact,
  contactError
}) {

React.useEffect(()=>{
  let errors = errMessage || contactError
 !!errors && toast.error(`🦄 ${errors}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
},[errMessage,contactError])
 
React.useEffect(()=>{
  let message = successContact || successMessage
  !!message && toast.success(`🦄 ${message}`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
},[successMessage,successContact])
  return (
    <div >
       
      <MovieProvider>
       
     
      <Router>
        <NavBar />
        <ToastContainer 
        />
        <SortdataModalTodo/>
        <Switch>
          <Route path="/contact" component={Contact} exact />
          <Route path="/siginup" component={SiginUp} exact />
          <Route path="/todo" component={TodoFunction} exact />
          <Route path="/" component={Home} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/sinlPach/:id" exact ><SinglPach/></Route>
          <Route path="/404" component={NotFoutnd} exact />
          <Redirect to="/404"/>
        </Switch>
      </Router>
      </MovieProvider>
    </div>
  );
}

const mapStateToProps =(state)=>({
  errMessage:state.globaleReducer.errMessage,
  successMessage:state.globaleReducer.successMessage,
  successContact:state.contactReducer.successContact,
  contactError:state.contactReducer.contactError
})

export default connect(mapStateToProps,null)(App);
