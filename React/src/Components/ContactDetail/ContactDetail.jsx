import React from 'react'
import './ContactDetai.css'
function ContactDetail() {
  return (
      <>
          <div className="container">
            <div className='cont'>
  <div className="card">
    <div className="card-header text-center">
      Enter your delivery details
    </div>
    <div className="card-body">
      <form>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <input type="text" className="form-control" id="mobileNumber" placeholder="Enter your mobile number" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="pincode">Pincode</label>
            <input type="text" className="form-control" id="pincode" placeholder="Enter your pincode" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="addressType">Address Type</label>
            <select className="form-control" id="addressType">
              <option>Home</option>
              <option>Work</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" className="form-control" id="address" placeholder="Enter your address" />
        </div>
        <div className="form-group">
          <label htmlFor="locality">Locality</label>
          <input type="text" className="form-control" id="locality" placeholder="Enter your locality" />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input type="text" className="form-control" id="city" placeholder="Enter your city" />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input type="text" className="form-control" id="state" placeholder="Enter your state" />
        </div>
        <div className="form-group">
          <label htmlFor="landmark">Landmark (Optional)</label>
          <input type="text" className="form-control" id="landmark" placeholder="Enter a landmark (optional)" />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="saveAddress" />
          <label className="form-check-label" htmlFor="saveAddress">Save Address</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Save and Continue</button>
      </form>
    </div>
  </div>
  <button id="prevBtn" className="btn btn-secondary mt-3" onclick="goBack()">Previous</button>
</div>
          </div>
    </>
  )
}

export default ContactDetail