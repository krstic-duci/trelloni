import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../components/Login';
import Home from '../components/Home';
import Boards from '../components/Boards';
import Profile from '../components/Profile';
import NoMatch from '../components/NoMatch';
import Header from '../components/Header';
import Footer from '../components/Footer';

function PrivateRoute({ children, ...rest }) {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <>
      <Header />
      <Route
        {...rest}
        render={() => (isAuth ? children : <Redirect to='/login' />)}
      />
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
