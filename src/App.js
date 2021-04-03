import TodoFunction from "./component/todo/TodoFunction";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Home from "./component/home/Home";
import Signin from "./component/login/Signin";
import SiginUp from "./component/login/SiginUp";
import NotFoutnd from "./component/notFound/NotFoutnd";
import SinglPach from "./component/singlPach/SinglPach";
import Contact from "./component/contact/Contact";
import { MovieProvider } from "./component/context/MovieContext";


function App() {

  return (
    <div >
      <MovieProvider>
      <Router>
        <Navbar />
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

export default App;
