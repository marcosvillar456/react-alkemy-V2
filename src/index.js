import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import { render } from "react-dom";
import "./index.css";

import Home from "./components/pages/Home";
import More from "./components/pages/more";
import Team from "./components/pages/Team";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="container">
        <Route exact path="/team" component={Team} />
        <Route exact={true} path="/" component={Home} />
      </div>
      <Route exact path="/More/:id" component={More} />
    </div>
  );
};
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
