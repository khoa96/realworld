import { Redirect, Route } from 'react-router-dom';
import React from 'react';
import { checkAuthen } from './checkAuth';
import { LOGIN } from '../constanst/router'

export const PrivateRouter = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuthen() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: LOGIN,
            state: { from: props.location },
          }}
        />
      )
    }
  />
);