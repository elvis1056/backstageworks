import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
// import cookies from 'js-cookie';

const checkAuth = () => {
  return true
  // return cookies.get('token') ? true : true
};

export const RouteWithLayout = props => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    checkAuth() ?
      <Route
        {...rest}
        render={matchProps => (
          <Layout>
            <Component {...matchProps} />
          </Layout>
        )}
      />
      :
      <Redirect to="/" />
  )
};

RouteWithLayout.propTypes = {
  auth: PropTypes.bool,
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteWithLayout;
