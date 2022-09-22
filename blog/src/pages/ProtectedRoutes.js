import React from 'react';
import { Route, Redirect } from 'react-router-dom';
let user = JSON.parse(localStorage.getItem('user'));
const token = user.token;

export default function ProtectedRoutes({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
}
