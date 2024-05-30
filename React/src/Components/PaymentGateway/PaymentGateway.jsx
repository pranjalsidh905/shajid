// import React from 'react';
// import './PaymentGateway.css';
// import { ToastContainer, toast } from 'react-toastify';

// function PaymentGateway() {
//     const submit = async (event) => {
//         event.preventDefault();
//         toast.success("payment successfully completed!")
//     }
//     return (
//         <>
//             <div className="container my-5 cont ">
//                 <div className="row justify-content-center">
//                     <div className="col-md-8">
//                         <div className="card box">
//                             <div className="text-center payment p-3">
//                                 <h3 >Payment Gateway</h3>
//                             </div>
//                             <div className="card-body">
//                                 <form>
//                                     {/* Billing Information */}
//                                     <h5>Billing Information</h5>
//                                     <div className="form-row">
//                                         <div className="form-group col-md-6">
//                                             <label htmlFor="firstName">First Name</label>
//                                             <input type="text" className="form-control"  placeholder="First Name" />
//                                         </div>
//                                         <div className="form-group col-md-6">
//                                             <label >Last Name</label>
//                                             <input type="text" className="form-control" placeholder="Last Name" />
//                                         </div>
//                                     </div>
//                                     <div className="form-group">
//                                         <label >Email</label>
//                                         <input type="text" className="form-control" placeholder="Email" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label >Address</label>
//                                         <input type="text" className="form-control"  placeholder="1234 Main St" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="city">City</label>
//                                         <input type="text" className="form-control"  placeholder="City" />
//                                     </div>
//                                     <div className="form-row">
//                                         <div className="form-group col-md-6">
//                                             <label >State</label>
//                                             <input type="text" className="form-control"  placeholder="State" />
//                                         </div>
//                                         <div className="form-group col-md-6">
//                                             <label >Zip</label>
//                                             <input type="text" className="form-control"  placeholder="Zip Code" />
//                                         </div>
//                                     </div>
//                                     {/* Payment Information */}
//                                     <h5 className="my-4">Payment Information</h5>
//                                     <div className="form-group ">
//                                         <label className='py-2'>Name on Card</label>
//                                         <input type="text" className="form-control" id="cardName" placeholder="Name on Card" />
//                                     </div>
//                                     <div className="form-group">
//                                         <label  className='py-2'>Card Number</label>
//                                         <input type="text" className="form-control" id="cardNumber" placeholder="Card Number" />
//                                     </div>
//                                     <div className="form-row">
//                                         <div className="form-group col-md-4">
//                                             <label  className='py-2'>Expiration</label>
//                                             <input type="text" className="form-control" id="expiration" placeholder="MM/YY" />
//                                         </div>
//                                         <div className="form-group col-md-4">
//                                             <label className='py-2'>CVV</label>
//                                             <input type="text" className="form-control" id="cvv" placeholder="CVV" />
//                                         </div>
//                                     </div>
//                                     {/* Submit Button */}
//                                     <button type="submit" className="mx-4 my-2 p-1 btn-block animate__animated animate__pulse animate__infinite button" onClick={submit}>
//                                         Submit Payment
//                                     </button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <ToastContainer position='top-center' className="custom-toast"/>
//             </div>
//         </>
//     );
// }

// export default PaymentGateway;



import React, { useState } from 'react';
import './PaymentGateway.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// Load Stripe
const stripePromise = loadStripe('pk_test_51PISlOSBYbE82nYYk8PLIBmC1nmWJrMnLW8B4rot2rRB73h8JIWkfCegtnIysb1VEbzGbu4BYox9aFXymGoK50Wi00jFULWliU');

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        cardName: 'card'
    });

    console.log(formData, "<<<>>>>>>")

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const submit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/users/payment/process', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount: 10000,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    address: formData.address,
                    city: formData.city,
                    state: formData.state,
                    postalCode: formData.zip,
                    cardName: formData.cardName
                })
            });

            const data = await response.json();
            const { client_secret: clientSecret } = data;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: formData.cardName,
                        email: formData.email,
                        address: {
                            line1: formData.address,
                            city: formData.city,
                            state: formData.state,
                            postal_code: formData.zip,
                            country: 'IN'
                        }
                    }
                }

            });
            console.log(result, "result>>>><<<")
            if (result.error) {
                toast.error(result.error.message);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    toast.success('Payment successfully completed!');
                }
            }
        } catch (error) {
            console.error('Payment processing error:', error);
            toast.error('Payment failed. Please try again.');
        }
    };

    return (
        <div className="container my-5 cont">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card box">
                        <div className="text-center payment p-3">
                            <h3>Payment Gateway</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={submit}>
                                {/* Billing Information */}
                                <h5>Billing Information</h5>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >First Name</label>
                                        <input type="text" className="form-control" name="firstName" placeholder="First Name" onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Last Name</label>
                                        <input type="text" className="form-control" name="lastName" placeholder="Last Name" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" name="email" placeholder="Email" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label >Address</label>
                                    <input type="text" className="form-control" name="address" placeholder="1234 Main St" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="city">City</label>
                                    <input type="text" className="form-control" name="city" placeholder="City" onChange={handleChange} />
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >State</label>
                                        <input type="text" className="form-control" name="state" placeholder="State" onChange={handleChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Zip</label>
                                        <input type="text" className="form-control" name="zip" placeholder="Zip Code" onChange={handleChange} />
                                    </div>
                                </div>
                                {/* Payment Information */}
                                <h5 className="my-4">Payment Information</h5>
                                <div className="form-group">
                                    <label >Name on Card</label>
                                    <input type="text" className="form-control" name="cardName" placeholder="Name on Card" onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <CardElement className="form-control" />
                                </div>
                                <button type="submit" className="mx-4 my-2 p-1 btn-block animate__animated animate__pulse animate__infinite button">
                                    Submit Payment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" className="custom-toast" />
        </div>
    );
};

const PaymentGateway = () => (
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
);

export default PaymentGateway;

