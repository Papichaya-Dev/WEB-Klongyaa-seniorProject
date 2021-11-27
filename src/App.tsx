import React from "react";
import "./App.css";
import Navbar from "./components/common/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//------- import page ----------------------------------------------------
import Home from "./components/page/Home/views/Home";
import History from "./components/page/History/views/History";
import ForgottenRate from "./components/page/ForgottenRate/views/ForgottenRate";
import PillStock from "./components/page/PillStock/views/PillStock";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/history" component={History} />
          <Route path="/forgottenRate" component={ForgottenRate} />
          <Route path="/pillstock" component={PillStock} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
