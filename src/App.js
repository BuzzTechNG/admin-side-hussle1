import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login";
import "../src/css/styles.scss";

import Dashboard from "./Components/Dashboard/Dashboard";
import "antd/dist/antd.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
