    import React, { useState } from 'react'
    import './SignUp.css'
    import { Link, Navigate } from 'react-router-dom';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
function SignUp() {
    const navigate = useNavigate();
        const [info, setInfo] = useState({
            user_name: '',
            email: '',
            password: '',
            phone_number: '',
            confirm_passward: ''
        });
        const handleclick = (e) => {
            setInfo({
                ...info,
                [e.target.id]: e.target.value
            });
        }
        const handlesubmit = async (e) => {
            e.preventDefault();
            try {
                const response = await axios.post('http://localhost:4000/users/signup', info, {
                    withCredentials: true
                });

                
                console.log('Signup successful:', response.data);
                // check if response send success
                
                if (response.data.success) {
                    navigate('/login');
                }
            else{
                console.log('server error please try again')
                    navigate('/signup');
                }

                // Clear the form fields after successful signup
                setInfo({
                    user_name: '',
                    email: '',
                    password: '',
                    phone_number: '',
                    confirm_passward: ''
                });

            } catch (error) {
                console.log('Error signing up:', error.response.data.message);
            }
        }

        return (
            <>
                <div className="container mb-5">
                    <div className="row">
                        <h1 className="text-center mt-5 mb-3"><img src="https://themewagon.github.io/eiser/img/logo.png" alt="logo" /></h1>
                        <div className="col-md-6 offset-md-3">
                            <form className="signup-form" onSubmit={handlesubmit}>
                                <h2>Sign Up</h2>

                                <div className="mb-3">
                                    <label  className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="user_name" placeholder="Enter your Name" value={info.user_name} onChange={handleclick} />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Email</label>
                                    <input type="text" className="form-control" id="email" placeholder="Enter your  Email Address" value={info.email} onChange={handleclick} />
                                </div>

                                <div className="mb-3">
                                    <label  className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phone_number" placeholder="Enter your Mobile Number" value={info.phone_number} onChange={handleclick} />
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" value={info.password} onChange={handleclick} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="confirm_passward" placeholder="Confirm your password" value={info.confirm_passward} onChange={handleclick} />
                                </div>
                                <button type="submit" className="btn btn-primary" id="btns"> Sign Up</button>
                                <p className="mt-3">Already have an account? <Link to='/login'><a href="#" id="login">Log In</a></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    export default SignUp