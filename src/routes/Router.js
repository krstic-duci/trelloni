import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../containers/Login';
import Home from '../containers/Home';
import Products from '../containers/Products';
import Profile from '../containers/Profile';
import NoMatch from '../components/NoMatch';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductSingle from '../components/product/ProductSingle';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <>
      <Header />
      <Route
        {...rest}
        render={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to='/login' />
        }
      />
      <Footer />
    </>
  );
}

export default function Router() {
  return (
    <>
      <Switch>
        <Route path='/login' component={Login} />

        <PrivateRoute exact path='/' component={Home} />

        <PrivateRoute exact path='/products/:id' component={ProductSingle} />

        <PrivateRoute path='/products' component={Products} />

        <PrivateRoute path='/profile' component={Profile} />

        <Route path='*' component={NoMatch} />
      </Switch>
    </>
  );
}
