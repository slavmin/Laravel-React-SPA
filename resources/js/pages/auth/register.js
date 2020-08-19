import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { register } from '../../api/auth';
import { getIntendedUrl } from '../../utils/auth';
import Layout from '../../components/Layout';
import useInputValue from '../../components/input-value';
import SmallCart from '../cart/small-cart';

export default function Register() {
  const history = useHistory();
  const { setCurrentUser, setToken } = useAuth();
  const email = useInputValue('email');
  const name = useInputValue('name');
  const password = useInputValue('password');
  const passwordConfirmation = useInputValue('password_confirmation');

  const handleSubmit = (e) => {
    e.preventDefault();

    register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConfirmation.value,
    })
      .then(({ user, token }) => {
        setCurrentUser(user);
        setToken(token);
        history.push(getIntendedUrl(user));
      })
      .catch((error) => {
        error.json().then(({ errors }) => {
          [email, name, password].forEach(({ parseServerError }) => parseServerError(errors));
        });
      });
  };

  return (
    <>
      <Layout title="PizzaShop SignUp" description="This is the register page">
        <div className="row mt-5">
          <div className="col-12">
            <div className="mb-5">
              <h2 className="mb-0">Create your account</h2>
            </div>

            <div className="card border-0 shadow-sm mb-5">
              <div className="card-body">
                <form onSubmit={handleSubmit} method="POST">
                  <div className="form-group">
                    <label className="form-label" htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      name="name"
                      className={`form-control ${name.error ? 'is-invalid' : ''}`}
                      autoComplete="username"
                      required
                      autoFocus
                      {...name.bind}
                    />

                    {name.error && <p className="invalid-feedback">{name.error}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={`form-control ${email.error ? 'is-invalid' : ''}`}
                      autoComplete="mail"
                      required
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
                      className={`form-control  ${password.error ? 'is-invalid' : ''}`}
                      minLength={6}
                      autoComplete="new-password"
                      required
                      {...password.bind}
                    />

                    {password.error && <p className="invalid-feedback">{password.error}</p>}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="password-confirmation">Password confirmation</label>
                    <input
                      type="password"
                      id="password-confirmation"
                      name="password_confirmation"
                      className={`form-control ${password.error ? 'is-invalid' : ''}`}
                      autoComplete="new-password"
                      required
                      {...passwordConfirmation.bind}
                    />
                  </div>

                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <button type="submit" className="btn btn-outline-primary">Sign up</button>
                    <Link to="/login" className="underline">
                      Login to your account
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
