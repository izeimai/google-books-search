import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages import
import Search from "./pages/Search";
import Saved from "./pages/Saved";

// Components import
import Navbar from "./components/Navbar";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router >
  );
}

export default App;
