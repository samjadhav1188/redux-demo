import React from 'react';
import { Home } from './features/Home';
import { About } from './features/About';
import { NavBar } from './features/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/" />
        </Route>
        <Route exact path="/About" component={About} />
      </Switch>
    </div>
  );
};