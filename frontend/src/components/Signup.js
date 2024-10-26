import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '' });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/register', formData)
            .then(response => {
                console.log(response.data);
                // Handle success (e.g., redirect or display success message)
            })
            .catch(error => {
                console.log(error.response.data);
                // Handle error
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
                <input type="password" name="password_confirmation" placeholder="Confirm Password" onChange={handleInputChange} required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
