import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { setIntendedUrl } from '../utils/auth';
import { useAuth } from '../context/AuthContext';
import useDocumentTitle from '../components/document-title';

function AuthRoute({ component: Component, title, ...rest }) {
  useDocumentTitle(title);
  const { authenticated } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!authenticated) {
          setIntendedUrl(props.location.pathname);
        }
        return authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        );
      }}
    />
  );
}

AuthRoute.displayName = 'Auth Route';

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  rest: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string,
};

export default AuthRoute;
