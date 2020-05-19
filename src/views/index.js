import React from "react";
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import Counter from "./Counter";

function Layout({ location }) {
  return (
    <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={500} classNames="frame">
        <Switch location={location}>
          <Route exact path="/" children={Home} />
          <Route path="/counter" children={Counter} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Layout;
