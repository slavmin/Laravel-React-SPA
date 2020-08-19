import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { forgotPassword } from '../../api/auth';
import useInputValue from '../../components/input-value';

export default function ForgotPassword() {
  const [resetFeedback, setResetFeedback] = useState('');
  const email = useInputValue('email');

  const handleSubmit = (e) => {
    e.preventDefault();

    forgotPassword({ email: email.value })
      .then((status) => setResetFeedback(status))
      .catch((error) => {
        error.json().then(({ errors }) => {
          email.parseServerError(errors);
        });
      });
  };

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="card mb-5">
              {resetFeedback && (
                <div className="bg-white border-l-4 border-blue text-sm text-grey-darker p-4 mb-4 w-3/4 sm:w-1/2 lg:w-2/5 xl:w-1/3" role="alert">
                  <p>
                    {' '}
                    {resetFeedback}
                  </p>
                </div>
              )}

              <div className="rounded">
                <form onSubmit={handleSubmit} method="POST">
                  <div className="form-group">
                    <label className="mb-1" htmlFor="email">
                      Enter your email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className={`form-control ${email.error ? 'border-red-500' : ''}`}
                      placeholder="e.g.jane@example.com"
                      required
                      autoFocus
                      {...email.bind}
                    />
                    {email.error && <p className="text-red-500 text-xs pt-2">{email.error}</p>}
                  </div>

                  <div className="form-group">
                    <button type="submit" className="border rounded p-2 text-white bg-indigo-500 w-full font-bold hover:bg-indigo-500-dark">
                      Email me reset instructions
                    </button>
                  </div>

                  <div className="mt-2">
                    <strong className="text-gray-700">If you don’t see your reset email…</strong>
                    <div className="text-gray-600 text-sm pt-2">Be sure to check your spam filter for an email from support@lmyapp.com</div>
                  </div>
                </form>
              </div>

              <div className="py-3">
                <span className="text-gray-600">Never mind,</span>
&nbsp;
                <Link to="/login" className="underline text-grey-darkest text-indigo">
                  go back to the login screen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
