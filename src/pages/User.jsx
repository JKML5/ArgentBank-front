import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Account from '../components/Account';
import Footer from '../components/Footer';
import userAccountsData from '../_mocks_/userAccountsData';

import '../css/User.css';

function User() {
  // Redirection if user not logged
  if (!useSelector((state) => state.isLogged)) {
    return <Navigate to="/" />;
  }

  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${firstName} ${lastName}!`}
          </h1>
          <button type="button" className="edit-button">
            Edit Name
          </button>
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
