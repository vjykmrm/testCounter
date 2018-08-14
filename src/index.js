import React from "react";

import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App.js";
import todoApp from "./reducers";
import "./styles.css";

let store = createStore(todoApp);
let rootElement = document.getElementById("app");

render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
