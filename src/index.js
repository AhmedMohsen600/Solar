import React from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyles } from "./global-styles";

render(
  <Router>
    <GlobalStyles />
    <App />
  </Router>,

  document.getElementById("root")
);

reportWebVitals();
