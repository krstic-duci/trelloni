import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../containers/Home';
import Boards from '../containers/Boards';
import Profile from '../containers/Profile';
import NoMatch from '../components/NoMatch';

export default function Routes() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/boards'>Boards</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/boards'>
          <Boards />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}
