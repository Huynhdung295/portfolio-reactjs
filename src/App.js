import Home from "./layout/Home";
import AboutMe from "./layout/AboutMe";
import Project_1 from "./layout/Project_1";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={AboutMe}></Route>
        <Route path="/Project-1" component={Project_1}></Route> 
      </Switch>
    </Router>
  );
}

export default App;
