import { Link, NavLink, Route } from "react-router-dom";
import "./App.css";
import TodoFeature from "./Todo";
import Home from "./Todo/pages/Home/home";

function App() {
  return (
    <div className="">
      <p>
        <NavLink to="/home"> Home Page</NavLink>
      </p>
      <p>
        <NavLink to="/todos">Todos</NavLink>
      </p>
      <Route exact path="/todos" component={TodoFeature} />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
