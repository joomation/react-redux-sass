import React, { Suspense, lazy } from "react";
import "./styles/layout.scss";
import HeaderContainer from "./containers/HeaderContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./views";
function App() {
  return (
    <Router basename="/react-redux-sass">
      <Route
        render={({ location }) =>
          (
            <div>
              <HeaderContainer />
              <Layout location={location} />
            </div>
          ).props.children
        }
      />
    </Router>
  );
}

export default App;
