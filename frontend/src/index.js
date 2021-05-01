import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import { Router } from "@reach/router";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Goals from "./components/Goals";
import Settings from "./components/Settings";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Router>
        <Home path="/" />
        <Dashboard path="/dashboard" />
        <Goals path="/goals" />
        <Settings path="/settings" />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
