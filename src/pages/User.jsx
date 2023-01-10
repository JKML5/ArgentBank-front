import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Account from '../components/Account';
import Footer from '../components/Footer';
import '../css/User.css';

function User() {
  // Redirection if user not logged
  if (!useSelector((state) => state.isLogged)) {
    return <Navigate to="/" />;
  }

  const userAccountsData = [
    {
      id: 1,
      title: 'Argent Bank Checking (x8349)',
      amount: '2,082.79',
      description: 'Available Balance',
    },
    {
      id: 2,
      title: 'Argent Bank Savings (x6712)',
      amount: '10,928.42',
      description: 'Available Balance',
    },
    {
      id: 3,
      title: 'Argent Bank Credit Card (x8349)',
      amount: '184.30',
      description: 'Current Balance',
    },
  ];

  return (
    <>
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
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
