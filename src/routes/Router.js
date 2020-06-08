import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Boards from '../containers/Boards';
import Profile from '../containers/Profile';
import NoMatch from '../components/NoMatch';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PrivateRoute({ children }) {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <>
      <Header />
      <Route render={() => (isAuth ? children : <Redirect to='/login' />)} />
      <Footer />
    </>
  );
}

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />

        <PrivateRoute exact path='/'>
          <Home />
        </PrivateRoute>

        <PrivateRoute path='/boards'>
          <Boards />
        </PrivateRoute>

        <PrivateRoute path='/profile'>
          <Profile />
        </PrivateRoute>

        <Route path='*' component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}
