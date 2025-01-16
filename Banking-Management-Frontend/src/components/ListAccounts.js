import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListAccounts.css'; // Import custom CSS for styling

const ListAccounts = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        axios.get('/api/accounts')
            .then(response => {
                setAccounts(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the accounts!', error);
            });
    }, []);

    return (
        <div className="accounts-container">
            <h2>All Accounts</h2>
            <ul className="accounts-list">
                {accounts.map(account => (
                    <li key={account.id} className="account-item">
                        <div className="account-info">
                            {/* Displaying account ID */}
                            <p className="account-id">Account ID: {account.id}</p>
                            <p className="account-name">Holder Name: {account.accountHolderName}</p>
                            <p className="account-balance">Balance: ${account.balance.toFixed(2)}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListAccounts;

