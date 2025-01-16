import React, { useState } from 'react';
import axios from 'axios';

const DeleteAccount = () => {
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.delete(`/api/accounts/${id}`)
            .then(response => {
                alert('Account deleted successfully!');
                setId('');
            })
            .catch(error => {
                console.error('There was an error deleting the account!', error);
            });
    };

    return (
        <div>
            <h2>Delete Account</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Account ID:</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <button type="submit">Delete Account</button>
            </form>
        </div>
    );
};

export default DeleteAccount;
