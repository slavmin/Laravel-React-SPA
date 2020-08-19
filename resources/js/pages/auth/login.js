import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { login } from '../../api/auth';
import { getIntendedUrl } from '../../utils/auth';
import Layout from '../../components/Layout';
import useInputValue from '../../components/input-value';
import SmallCart from '../cart/small-cart';

export default function Login() {
  const { setCurrentUser, setToken } = useAuth();
  const history = useHistory();
  const email = useInputValue('email');
  const password = useInputValue('password');

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      email: email.value,
      password: password.value,
    })
      .then(({ user, token }) => {
        setToken(token);
        setCurrentUser(user);
        history.push(getIntendedUrl(user));
      })
      .catch((error) => {
        error.json().then(({ errors }) => email.parseServerError(errors));
      });
  };

  return (
    <>
      <Layout title="PizzaShop Login" description="This is the login page">
        <div className="row mt-5">
          <div className="col-12">
            <div className="mb-5">
              <h2 className="mb-0">Sign into your account</h2>
            </div>

            <div className="card border-0 shadow-sm mb-5">
              <div className="card-body">
                <form onSubmit={handleSubmit} method="POST">
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className={`form-control ${email.error ? 'is-invalid' : ''}`}
                      autoComplete="email"
                      required
                      autoFocus
                      {...email.bind}
                    />

                    {email.error && <p className="invalid-feedback">{email.error}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      autoComplete="current-password"
                      required
                      {...password.bind}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <button type="submit" className="btn btn-outline-primary">
                      Sign in
                    </button>
                    <Link to="/register" className="underline">
                      Create your account
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <SmallCart />
      </Layout>
    </>
  );
}
