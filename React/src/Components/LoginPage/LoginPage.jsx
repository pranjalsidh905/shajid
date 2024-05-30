import React, { useState } from 'react'
import './LoginPage.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
    // Define state variables for email and password
    const navigate = useNavigate(); // Get navigate function from React Router

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // Update state when input values change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    // Log form data when submitted
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { email, password } = formData;
            if (!formData.email || !formData.password) {
                console.error("Error: Email or password is missing.");
                return;
            }
            const response = await axios.post('http://localhost:4000/users/login', formData, {
                withCredentials: true
            });
            console.log("please enter the OTP", response.data);

            // Check if response indicates success
            if (response.data.success) {
                // If success, navigate to '/otpverify' route
                navigate('/otpverify');
            }
            else {
                alert('Server Error Please Try Again');
                navigate('/login');
            }

            setFormData({
                email: '',
                password: ''
            });
        } catch (error) {
            console.error("Error", error.response.data.message);
        }
    };

    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="row">
                    <h1 className="text-center mb-5"><img src="https://themewagon.github.io/eiser/img/logo.png" alt="" /></h1>
                    <div className="col-md-6 offset-md-3">
                        <form className="login-form" onSubmit={handleSubmit}>
                            <h2 >Login</h2>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" value={formData.password} onChange={handleChange} />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="remember" />
                                <label className="form-check-label" htmlFor="remember">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary" id='btns'> Login</button>
                            <p className="mt-3">Don't have an account? <Link to='/signup'><a href="#" id='register'>Register</a></Link></p>
                            <p>Forgot your password? <Link to='/resetpass'><a href="#" id='resets'>Reset Password</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
