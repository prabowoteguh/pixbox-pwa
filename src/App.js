import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import home from "./pages/home/index.js";
import "./assets/scss/main.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={home} />
      </Router>
    </div>
  );
}

export default App;
