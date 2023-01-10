import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from './LogoutButton';
import logo from '../assets/argentBankLogo.png';
import '../css/Header.css';

function Header() {
  const userLogged = useSelector((state) => state.isLogged);
  console.log(userLogged);

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      {!userLogged ? (
        <div>
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle" />
            Sign In
          </Link>
        </div>
      ) : (
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle" />
            Tony
          </Link>
          <LogoutButton />
        </div>
      )}
    </nav>
  );
}

export default Header;
