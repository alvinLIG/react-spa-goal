import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Login from './Login';

import { AUTH_TOKEN } from '../utils/constants';

import logo from '../assets/images/logo.png';

const Header = () => {
  const history = useHistory();
  const token = localStorage.getItem(AUTH_TOKEN);
  const [isLoggedIn, setLoggedIn] = useState(token);
  const [showLogin, setShowLogin] = useState(false);
  const buttonText = showLogin ? 'Close' : 'Login';

  const handleClick = () => {
    if(isLoggedIn) {
      setLoggedIn(false);
      setShowLogin(false);
      localStorage.removeItem(AUTH_TOKEN);
      history.push('/');
    } else {
      setShowLogin(!showLogin);
    }
  }

  return (
    <>
      <header className="header">
        <div className="header-inner l-container">
          <h1>
            <Link to="/">
              <img className="header-logo" src={logo} alt="BLOG" />
            </Link>
          </h1>

          <button className="header-button" onClick={handleClick}>
            { isLoggedIn ? 'Logout' : buttonText }
          </button>
        </div>
      </header>

      <Login showLogin={showLogin} />
    </>
  );
}

export default Header;
