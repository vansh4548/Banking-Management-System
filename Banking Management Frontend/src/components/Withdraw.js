// src/components/Withdraw.js
import React, { useState } from 'react';
import axios from 'axios';

const Withdraw = () => {
    const [id, setId] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/accounts/${id}/withdraw?amount=${amount}`)
            .then(response => {
                alert('Withdrawal successful!');
                setId('');
                setAmount('');
            })
            .catch(error => {
                console.error('There was an error making the withdrawal!', error);
            });
    };

    return (
        <div>
            <h2>Withdraw Money</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Account ID:</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button type="submit">Withdraw</button>
            </form>
        </div>
    );
};

export default Withdraw;
