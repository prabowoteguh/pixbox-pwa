import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
// import store from "store";

/*
RENDER SHOULD BE LIKE THIS
IF WE NEED STATE MANAGEMENT

<React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>,
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("bacod-framework")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
