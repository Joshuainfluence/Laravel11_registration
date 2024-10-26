import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', { email, password })
            .then(response => {
                console.log(response.data);
                // Handle success (e.g., store token, redirect)
            })
            .catch(error => {
                console.log(error.response.data);
                // Handle error
            });
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
