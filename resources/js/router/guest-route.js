import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import useDocumentTitle from '../components/document-title';

function GuestRoute({
  component: Component, title, description, ...rest
}) {
  useDocumentTitle(title, description);

  return (
    <Route {...rest} render={(props) => <Component {...props} />} />
  );
}

GuestRoute.displayName = 'Guest Route';

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  rest: PropTypes.object,
  location: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default GuestRoute;
