import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome';
import Login from '../pages/auth/login';
import Register from '../pages/auth/register';
import NotFound from '../pages/404';
import Cart from '../pages/cart';
import Profile from '../pages/profile';
import AuthRoute from './auth-route';
import GuestRoute from './guest-route';
import { useAuth } from '../context/AuthContext';
import FullPageSpinner from '../components/spinner';

function App() {
  const { initializing } = useAuth();
  return initializing ? (
    <FullPageSpinner />
  ) : (
    <Router>
      <>
        <Switch>
          <GuestRoute exact path="/" component={Welcome} title="PizzaShop" />
          <GuestRoute path="/register" component={Register} title="SignUp PizzaShop" />
          <GuestRoute path="/login" component={Login} title="SignIn PizzaShop" />
          <GuestRoute path="/cart" component={Cart} title="Cart PizzaShop" />
          <AuthRoute path="/profile/:id" component={Profile} title="Profile PizzaShop" />
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
