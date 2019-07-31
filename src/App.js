import React, { Suspense, lazy } from 'react';
import './styles/style.scss';
import HeaderContainer from './containers/HeaderContainer'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Home = lazy(() => import('./routes/Home'));
const Counter = lazy(() => import('./routes/Counter'));

function App() {
  
  return (
    <Router basename="/react-redux-scss">
      <HeaderContainer/>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/counter" component={Counter}/>
        </Switch>
      </Suspense>
     
    </Router>
  );
}

export default App;
