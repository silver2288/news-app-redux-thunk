import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailView from "./pages/DetailView";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:categoryid/:id" component={DetailView} />
        </Switch>
      </Router>
    );
  }
}

export default App;
