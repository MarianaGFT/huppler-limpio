import React, { useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import { Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function useUser() {
  const [token, setToken] = useState('');
  const [authentication, setAuthentication] = useState(false);

  const PrivateRoute = ({ component: Component }) => {
    // console.log(authentication);
    if (token) {
      const decoded = jwt_decode(token);
      // console.log('Dedoded token: ', decoded);

      let currentTime = new Date().getTime() / 1000;
      if (currentTime > decoded.exp) onLogOut();
    }
    return (
      <Route
        render={props =>
          authentication ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  };

  const PublicRoute = ({ component: Component }) => (
    <Route
      render={props =>
        !authentication ? (
          <Component {...props} />
        ) : (
          <Redirect to="/control-panel" />
        )
      }
    />
  );

  const onLogOut = () => {
    setAuthentication(false);
    setToken('');
    localStorage.removeItem('token');
  };

  useEffect(() => {
    if (token !== '') {
      localStorage.setItem('token', token);
    }
  }, [token]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
      setAuthentication(true);
    }
  }, []);

  const getRol = () => {
    let rol = null;
    if (token) {
      const decoded = jwt_decode(token);
      rol = decoded.user.rol;
    }
    return rol;
  };

  return {
    token,
    authentication,
    setAuthentication,
    setToken,
    PrivateRoute,
    PublicRoute,
    onLogOut,
    getRol
  };
}

const User = createContainer(useUser);

export default User;
