import TodoFunction from "./component/todo/TodoFunction";
import Navbar from "./component/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/home/Home";
import Signin from "./component/login/Signin";
import SiginUp from "./component/login/SiginUp";


function App() {

  return (
    <div >
      <Router>
        <Navbar />
        <Switch>
          <Route path="/signin" component={Signin} exact />
          <Route path="/siginup" component={SiginUp} exact />
          <Route path="/todo" component={TodoFunction} exact />
          <Route path="/home" component={Home} exact />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
