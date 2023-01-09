import React from 'react'
import Account from '../components/Account';
import Footer from "../components/Footer";
import '../css/User.css'

function User() {
  const userAccountsData = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '2,082.79',
      description: 'Available Balance'
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '10,928.42',
      description: 'Available Balance'
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '184.30',
      description: 'Current Balance'
    }
  ]

  return (
    <>
      <main class="main bg-dark">
        <div class="header">
          <h1>Welcome back<br/>Tony Jarvis!</h1>
          <button class="edit-button">Edit Name</button>
        </div>
        <h2 class="sr-only">Accounts</h2>
        {userAccountsData.map((userAccount) => (
          <Account title={userAccount.title} amount={userAccount.amount} description={userAccount.description} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default User