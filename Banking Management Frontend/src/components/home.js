// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './home.css'; // Import custom CSS for styling

const Home = () => {
    return (
        <div className="home-container">
            <h2>Welcome to Our Banking Management System</h2>
            <p className="intro-text">
                Our Banking Management System allows you to perform various banking operations
                seamlessly. You can create new accounts, view all accounts, deposit and withdraw
                funds, delete accounts, and view transaction histories.
            </p>
            <div className="features-container">
                <div className="feature">
                    <h3>Create Account</h3>
                    <p>Register new accounts with ease using our user-friendly interface.</p>
                    <Link to="/create" className="btn">Create Account</Link>
                </div>
                <div className="feature">
                    <h3>View All Accounts</h3>
                    <p>See a comprehensive list of all registered accounts.</p>
                    <Link to="/accounts" className="btn">View All Accounts</Link>
                </div>
                <div className="feature">
                    <h3>Deposit & Withdraw</h3>
                    <p>Perform transactions securely, depositing and withdrawing funds as needed.</p>
                    <Link to="/deposit" className="btn">Make a Transaction</Link>
                </div>
                <div className="feature">
                    <h3>Delete Account</h3>
                    <p>Delete accounts that are no longer needed with just a few clicks.</p>
                    <Link to="/delete" className="btn">Delete Account</Link>
                </div>
                <div className="feature">
                    <h3>Transaction History</h3>
                    <p>View detailed transaction histories for each account.</p>
                    <Link to="/accounts/:id/transactions" className="btn">Transaction History</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
