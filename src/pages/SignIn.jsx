import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../store';
import Footer from '../components/Footer';
import '../css/SignIn.css';

function SignIn() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const requestData = {
      email: username,
      password,
    };

    // send a post request to the api
    fetch('http://127.0.0.1:3001/api/v1/user/login', {
      method: 'POST',
      body: JSON.stringify(requestData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong ...');
      })
      .then((data) => {
        // process the response data here
        console.log(data.status);

        // Connect the user
        if (data.status === 200) {
          dispatch(login());
        }
      })
      .catch((error) => {
        // handle the error
        console.error('Error:', error);
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
          <form>
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

            <button
              type="button"
              className="sign-in-button"
              onClick={handleSubmit}
            >
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
