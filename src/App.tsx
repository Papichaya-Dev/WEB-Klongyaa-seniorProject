import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//------- import page ----------------------------------------------------
import Home from "./components/page/Home/views/Home";
import History from "./components/page/History/views/History";
import ForgottenRate from "./components/page/ForgottenRate/views/ForgottenRate";
import PillStock from "./components/page/PillStock/views/PillStock";
import Dashboard from "./components/page/Login/Login";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/home" component={Home} />
          <Route path="/history" component={History} />
          <Route path="/forgottenRate" component={ForgottenRate} />
          <Route path="/pillstock" component={PillStock} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
