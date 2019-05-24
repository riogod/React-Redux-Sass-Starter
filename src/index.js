/* global document */
// require("babel-polyfill");
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import {BrowserRouter} from "react-router-dom";




// By using <Provider />, the store will be made available for all the components in your application.

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById("root")
);