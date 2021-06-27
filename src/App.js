import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home/index.js";
import example from "./pages/example/index.js";
import login from "./pages/login/index.js";
import "./assets/scss/main.scss";

function App() {
  return (
    <div className="b-mobile-container">
      <Router>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/example" component={example} />
        <Route exact path="/login" component={login} />
      </Router>
    </div>
  );
}

export default App;