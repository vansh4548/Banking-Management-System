// src/components/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('/api/users/signup', { username, password });
            console.log('Sign Up Response:', response); // Debugging line
            if (response.status === 200) {
                navigate('/home');
            } else {
                setError(response.data.message || 'Sign up failed. Please try again.');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
            console.error('Sign up error:', err);
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Sign Up</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default SignUp;
