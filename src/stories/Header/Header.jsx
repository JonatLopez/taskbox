import React from 'react';
import PropTypes from 'prop-types';
import logo from "../../assets/images/logo.png"

import { Button } from '../Button/Button';
import './header.scss';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="header">
      <div>
        <img className='logo' src={logo} alt="app logo"></img>
        <h1>Customer Management</h1>
      </div>
      <div>
        {user ? (
          <Button size="small" onClick={onLogout} label="Log out" />
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func,
  onLogout: PropTypes.func,
  onCreateAccount: PropTypes.func,
};

Header.defaultProps = {
  user: null,
};
