import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailView from "./pages/DetailView";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            render={({ location }) => {
              const { pathname } = location;
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={pathname}
                    classNames="page"
                    timeout={{
                      enter: 1000,
                      exit: 1000
                    }}
                  >
                    <Route
                      location={location}
                      render={() => (
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route
                            path="/detail/:categoryid/:id"
                            component={DetailView}
                          />
                        </Switch>
                      )}
                    />
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
