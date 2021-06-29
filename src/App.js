import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//#region - IMPORT PAGES
import home from "./pages/home/index.js";
import example from "./pages/example/index.js";
import login from "./pages/login/index.js";
import statusPage from "./pages/status/index.js";
import struck from "./pages/struck/index.js";
import order from "./pages/order/index.js";
import listOrder from "./pages/order/list.js";
import pickup from "./pages/order/pickup.js";
//#endregion - IMPORT PAGES

//#region - IMPORT STYLE
import "./assets/feather-icon/feather-icon.css";
import "./assets/scss/main.scss";
//#endregion - IMPORT STYLE

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
        <Route exact path="/order/create" component={order} />
        <Route exact path="/order/pickup" component={pickup} />
        <Route exact path="/order/list" component={listOrder} />
      </Router>
    </div>
  );
}

export default App;
