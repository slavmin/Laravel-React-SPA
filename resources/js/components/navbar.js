/* eslint-disable no-undef */
import React, { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { Logo } from './icons/logo';
import { useAuth } from '../context/AuthContext';
import { setIntendedUrl } from '../utils/auth';
import { logout } from '../api/auth';

export default function GuestNav() {
  const { setCurrentUser, setToken, currentUser } = useAuth();
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [hideMobileNav, setHideMobileNav] = useState(true);

  const toggleMobileNav = () => setHideMobileNav((prevState) => !prevState);
  const closeMobileNav = () => setHideMobileNav(true);

  const handleLogout = (e) => {
    e.preventDefault();

    logout({
      id: currentUser.id,
    }).catch((error) => {
      throw new Error(error);
    });

    setCurrentUser(null);
    setToken(null);
    history.push('/');
    setIntendedUrl(null);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-light bg-white shadow-sm">
      <Link to="/" className="navbar-brand">
        <Logo width="32px" />
        <span className="ml-2">PizzaShop</span>
      </Link>
      <button onClick={toggleMobileNav} className="navbar-toggler" type="button" data-target="#navbarNav">
        <span className="navbar-toggler-icon" />
      </button>

      {!currentUser
        && (
        <div className={`navbar-collapse ${hideMobileNav ? 'collapse' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li onClick={closeMobileNav} className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>

            <li onClick={closeMobileNav} className="nav-item">
              <NavLink to="/register" className="nav-link">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
        )}

      {currentUser
        && (
        <div className={`navbar-collapse ${hideMobileNav ? 'collapse' : 'show'}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li onClick={closeMobileNav} className="nav-item">
              <NavLink to={`/profile/${currentUser.id}`} className="nav-link">
                {currentUser.name}
              </NavLink>
            </li>
            <li onClick={handleLogout} className="nav-item">
              <Link to="/logout" className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
        )}
    </nav>
  );
}
