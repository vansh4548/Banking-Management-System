// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { FaMoneyCheck, FaUser, FaHistory } from 'react-icons/fa';
import CreateAccount from './components/CreateAccount';
import ListAccounts from './components/ListAccounts';
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';
import DeleteAccount from './components/DeleteAccount';
import TransactionList from './components/TransactionList';
import AccountDetails from './components/AccountDetails'; 
import Home from './components/home';
import './App.css';

function App() {
    return (
        <Router>
            <div className="container">
                <h1>Banking Management System</h1>
                <nav>
                    <ul>
                        <li><Link to="/home"><FaMoneyCheck /> Home</Link></li>
                        <li><Link to="/create"><FaUser /> Create Account</Link></li>
                        <li><Link to="/accounts"><FaUser /> All Accounts</Link></li>
                        <li><Link to="/deposit"><FaMoneyCheck /> Deposit</Link></li>
                        <li><Link to="/withdraw"><FaMoneyCheck /> Withdraw</Link></li>
                        <li><Link to="/delete"><FaUser /> Delete Account</Link></li>
                        <li><Link to="/transactions"><FaHistory /> Transaction History</Link></li>
                    </ul>
                </nav>
                <Routes>
                    {/* Redirect root ("/") to "/home" */}
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/create" element={<CreateAccount />} />
                    <Route path="/accounts" element={<ListAccounts />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/delete" element={<DeleteAccount />} />
                    <Route path="/accounts/:id" element={<AccountDetails />} />
                    <Route path="/transactions" element={<TransactionList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
