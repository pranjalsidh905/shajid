import React, { useEffect, useState } from 'react'
import './ProductInfo.css'
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function ProductInfo({ product, userId, productId }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null)
  const [addbutton, setAddbutton] = useState(true);

  const navigate = useNavigate()

  const addCart = async () => {
    if (userId && productId) {
      try {
        // console.log("enter")
        const response = await axios.post('http://localhost:4000/eiser/products/addToCart', {
          productId, userId
        });
        setSuccessMessage(response.data.message);
        setAddbutton(false);
        toast.success("product added successfully!")
      } catch (error) {
        setError('Error adding product to cart');
      }
    }
  };

  const Gocart = async () => {
    navigate(`/addcart`);
  }
  return (
    <>
      <div className="container px-4 text-center">
        <div className="row gx-5">
          <div className="col">
            <div className="p-5">
              <img src={product.image_link} className="img-fluid" alt />
            </div>
            {addbutton ? (
              <button type="button" className="btn  inherit px-3 mx-4 py-2" id='btn1' onClick={addCart} ><i className="fa-solid fa-cart-shopping mx-2" />Add To Cart</button>
            ) : (
              <button button type="button" className="btn  inherit px-3 mx-4 py-2" id='btn1' onClick={Gocart}><i className="fa-solid fa-cart-shopping mx-2" />GO To Cart</button>
            )}
            <button type="button" className="btn  px-3 py-2" id='btn2'><i className="fa-solid fa-arrow-up-right-from-square mx-2" />Buy Now</button>
          </div>
          <div className="col p-5 text-start">
            <div className="col fs-3 border text-start p-4">
              <div className="container">
                <p>{product.Product_Name}</p>
                <p>Price = <span className="fw-bold">${product.price}</span></p>
              </div>
            </div>

            {product.category === 'shoe' ? (
              <div className="col border mt-5 p-4">
                <div className="container">
                  <h3 className="fw-bold mb-4">Select Size</h3>
                  <div className="row align-items-start">
                    <div className="col border rounded-5 text-center p-1">
                      <p className="fs-3">IND-7</p>
                    </div>
                    <div className="col border rounded-pill text-center p-1">
                      <p className="fs-3">IND-8</p>
                    </div>
                    <div className="col border rounded-pill text-center p-1">
                      <p className="fs-3">IND-9</p>
                    </div>
                    <div className="col border rounded-pill text-center p-1">
                      <p className="fs-3">IND-10</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="col border mt-5 p-4">
                <div className="container">
                  <h3 className="fw-bold mb-4">Select Size</h3>
                  <p>Free size</p>
                </div>
              </div>
            )}
            <div className="col border mt-5 p-4">
              <div className="container">
                <h3 className="my-3">Product Detail</h3>
                <p>
                  Name :{product.Product_Name} <br />
                  Pattern : {product.Pattern} <br />
                  Net Quantity (N) : {product.Net_Quantity} <br />
                  Sizes : {product.sizes}<br />
                  Country of Origin : {product.CountryOforigin}</p>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer position='bottom-center'/>
      </div>
    </>
  )
}

export default ProductInfo