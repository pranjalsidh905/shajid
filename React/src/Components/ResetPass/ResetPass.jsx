import React, { useState } from 'react'
import './ResetPass.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function ResetPass() {
    const [Detail, SetDetail] = useState({
        email: '',
        // password: '',
        // confirmpassword: '',
    });

    const handleclick = (e) => {
        SetDetail({
            ...Detail,
            [e.target.id]: e.target.value
        });
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        try {
          
            const response = await axios.post('http://localhost:4000/users/Forgetpass',Detail);

            console.log("email send successfully to your mail", response.data);
            SetDetail({
                email: '',
                // confirmpassword: '',
                // password: ''
            });
        }
        catch (error) {
            console.error("error", error.response.data.message);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form className="reset-password-form" onSubmit={handlesubmit}>
                            <h2>Reset Password</h2>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter your Email" value={Detail.email} onChange={handleclick} />
                            </div>
                            <button type="submit" className="btn btn-primary" id='reset'>Reset Password</button>
                            <p className="mt-3">Remembered your password? <Link to='/login'><a href="#" id='login'>Log In</a></Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ResetPass