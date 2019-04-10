import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages import
import Search from "./pages/Search";
import Saved from "./pages/Saved";

// Components import
import Navbar from "./components/Navbar";
import Header from "./components/Header";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Header />
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </div>
      </Router >
    );
  }
}

export default App;
