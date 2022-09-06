import { Route } from "react-router-dom";
import "./App.css";
import TodoFeature from "./Todo";

function App() {
  return (
    <div className="">
      Home Page
      <Route path="/todos" component={TodoFeature} />
    </div>
  );
}

export default App;
