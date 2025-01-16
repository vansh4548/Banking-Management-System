import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionList from './TransactionList';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const AccountDetails = ({ accountId }) => {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        if (accountId) {
            axios.get(`/api/accounts/${accountId}`)
                .then(response => {
                    setAccount(response.data);
                })
                .catch(error => {
                    console.error('There was an error fetching the account details!', error);
                });
        }
    }, [accountId]);

    if (!account) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Account Details</h2>
            <p>Account ID: {account.id}</p>
            <p>Account Holder Name: {account.accountHolderName}</p>
            <p>Balance: {account.balance}</p>
            
            {/* Button to view transactions */}
            <Link to={`/accounts/${accountId}/transactions`}>
                <button>View Transaction History</button>
            </Link>
        </div>
    );
};

export default AccountDetails;
