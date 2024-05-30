import React, { useState } from 'react'
import './OtpVerificaton.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OtpVerificaton() {

    const navigate = useNavigate();
    const [data, setData] = useState({
        otp: '',
    });

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/users/otpvalidation', data, {
                withCredentials: true
            }); 

            console.log("OTP verified", response.data);
            setData({
                otp: ''
            });

            if (response.data.success) {
                console.log(response.data.token);
                localStorage.setItem('token',response.data.token);
                navigate('/');
            }

            else
                navigate('/login');


        }
        catch (error) {
            console.error("Error", error.message);
        }
    }

    const handleclick = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value
        });

    }
    return (
        <>
            <div className="container " id='cont'>
                <h2 className="mb-4">OTP Verification</h2>
                <p className="mb-4">Please enter the OTP sent to your mobile number.</p>
                <form id="otpForm" action="#" onSubmit={handlesubmit}>
                    <div className="mb-3">
                        <input type='Number' id="otp" className="form-control" placeholder="Enter OTP" value={data.otp} onChange={handleclick} />
                    </div>
                    <div className="mb-3">
                        <button id="submit" className="btn btn-primary">Verify OTP</button>
                    </div>
                </form>
                <p id="otpMessage" />
                <button id="resendButton" className="btn btn-secondary">Resend OTP</button>
            </div>

        </>
    )
}

export default OtpVerificaton