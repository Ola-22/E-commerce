import "./App.css";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch>
          <Route path="/cart" exact>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
