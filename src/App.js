import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home/index.js";
import example from "./pages/example/index.js";
import login from "./pages/login/index.js";
import statusPage from './pages/status/index.js';
import struck from './pages/struck/Index.js';

import "./assets/scss/main.scss";

function App() {
  return (
    <div className="b-mobile-container">
      <Router>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/example" component={example} />
        <Route exact path="/login" component={login} />
        <Route exact path="/status" component={statusPage} />
        <Route exact path="/struck" component={struck} />
      </Router>
    </div>
  );
}

export default App;
