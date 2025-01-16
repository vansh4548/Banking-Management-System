// src/components/CreateAccount.js
import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
    const [accountHolderName, setAccountHolderName] = useState('');
    const [balance, setBalance] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/accounts', { accountHolderName, balance })
            .then(response => {
                alert('Account created successfully!');
                setAccountHolderName('');
                setBalance('');
            })
            .catch(error => {
                console.error('There was an error creating the account!', error);
            });
    };

    return (
        <div>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Account Holder Name:</label>
                    <input
                        type="text"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Balance:</label>
                    <input
                        type="number"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                    />
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccount;
