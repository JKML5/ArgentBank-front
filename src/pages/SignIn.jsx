import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, updateFirstName, updateLastName } from '../store';
import Footer from '../components/Footer';
import '../css/SignIn.css';

function SignIn() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState('');

  /**
   * Get user's name from backend and save to redux
   * @param {String} token
   */
  function getUserInfos(token) {
    fetch('http://127.0.0.1:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        if (data.status === 200) {
          // Save user's name
          dispatch(updateFirstName(data.body.firstName));
          dispatch(updateLastName(data.body.lastName));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const requestData = {
      email: username,
      password,
    };

    fetch('http://127.0.0.1:3001/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((error) => {
            setFormError(error.message);
            throw new Error(error.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        // Connect the user
        if (data.status === 200) {
          dispatch(login());
          getUserInfos(data.body.token);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  // Redirect if user is properly logged
  if (useSelector((state) => state.isLogged)) {
    return <Navigate to="/user" />;
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon" />
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            {formError !== '' && <p className="error">{formError}</p>}
            <button type="submit" className="sign-in-button">
              Sign In
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SignIn;
