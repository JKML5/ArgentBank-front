import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateFirstName, updateLastName } from '../store';
import Account from '../components/Account';
import Footer from '../components/Footer';
import userAccountsData from '../_mocks_/userAccountsData';
import '../css/User.css';

function User() {
  // Redirection if user not logged
  if (!useSelector((state) => state.isLogged)) {
    return <Navigate to="/" />;
  }

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const token = useSelector((state) => state.token);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  function handleEditClick() {
    setEditMode(true);
  }

  function handleEditCancelClick() {
    setEditMode(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const dataToSend = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
    };

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToSend),
    };

    fetch('http://127.0.0.1:3001/api/v1/user/profile', options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 200) {
          dispatch(updateFirstName(event.target.firstName.value));
          dispatch(updateLastName(event.target.lastName.value));
          setEditMode(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          {editMode ? (
            <>
              <h1>Welcome back</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="firstName"
                  className="account-edit-input-text"
                  defaultValue={firstName}
                />
                <input
                  type="text"
                  name="lastName"
                  className="account-edit-input-text"
                  defaultValue={lastName}
                />
                <div className="account-edit-button-wrapper">
                  <button type="submit" className="account-edit-button">
                    Save
                  </button>
                  <button
                    type="button"
                    className="account-edit-button"
                    onClick={handleEditCancelClick}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1>
                Welcome back
                <br />
                {`${firstName} ${lastName}!`}
              </h1>
              <button
                type="button"
                className="edit-button"
                onClick={handleEditClick}
              >
                Edit Name
              </button>
            </>
          )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {userAccountsData.map((userAccount) => (
          <Account
            key={userAccount.id}
            title={userAccount.title}
            amount={userAccount.amount}
            description={userAccount.description}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default User;
