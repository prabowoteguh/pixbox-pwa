import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//#region - IMPORT FOR STYLE
import "./assets/feather-icon/feather-icon.css";
import "./assets/scss/main.scss";
//#endregion - IMPORT FOR STYLE

//#region - IMPORT FOR PAGES
import home from "./pages/home/index.js";
import example from "./pages/example/index.js";
import login from "./pages/login/index.js";
import statusPage from "./pages/status/index.js";
//#endregion - IMPORT FOR PAGES

function App() {
  return (
    <div className="b-mobile-container">
      <Router>
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route exact path="/example" component={example} />
        <Route exact path="/status" component={statusPage} />
        <Route exact path="/login" component={login} />
      </Router>
    </div>
  );
}

export default App;
