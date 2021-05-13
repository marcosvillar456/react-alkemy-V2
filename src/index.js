import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Products from "./components/pages/Home";
import { render } from "react-dom";
import "./index.css";
import More from "./components/pages/more";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <Route exact={true} path="/" component={Products} />
        <Route exact path="/:id" component={More} />
      </div>
    </div>
  );
};
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
