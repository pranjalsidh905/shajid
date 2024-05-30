import React, { useEffect, useState } from 'react';
import './AddtoCart.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function AddtoCart({ product, userId }) {
    const [quantities, setQuantities] = useState({});
    const [error, setError] = useState(null);
    const [cartitem, setCartitem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [priceDetails, setPriceDetails] = useState({
        totalPrice: 0,
        totalDiscount: 0,
        totalAmount: 0
    });

    const handleIncreaseQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: (prevQuantities[productId] || 1) + 1
        }));
    };

    const handleDecreaseQuantity = (productId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1)
        }));
    };
    
    const navigate = useNavigate();

    const handlebtn = async () => {
        navigate(`/payment`);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = product?.cart || [];
                const promises = products.map((item) => axios.get(`http://localhost:4000/eiser/products/getproductbyid/${item._id}`));
                const responses = await Promise.all(promises);
                const data = responses.map((response) => response.data);
                setCartitem(data);
                const initialQuantities = data.reduce((acc, item) => {
                    acc[item._id] = 1;
                    return acc;
                }, {});
                setQuantities(initialQuantities);

                // Simulate loading with a delay
                setTimeout(() => {
                    setLoading(false);
                }, 2000); // Delay of 1000ms
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, [product]);

    useEffect(() => {
        const calculatePriceDetails = () => {
            let totalPrice = 0;
            let totalDiscount = 0;
            cartitem.forEach(item => {
                const quantity = quantities[item._id] || 1;
                totalPrice += item.price * quantity;
                totalDiscount += (item.del_price - item.price) * quantity;
            });
            const totalAmount = totalPrice - totalDiscount;
            setPriceDetails({ totalPrice, totalDiscount, totalAmount });
        };
        calculatePriceDetails();
    }, [cartitem, quantities]);

    const removeitem = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/eiser/products/deleteproduct/${id}/${userId}`);
            setCartitem((previtem) => previtem.filter(item => item._id !== id));
        } catch (error) {
            setError(error.message);
        }
    };

    if (loading) {
        return (
            <div>
                <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="Loading" />
            </div>
        );
    }

    return (
        <>
            {cartitem.length === 0 ? (
                <div className="empty-cart-container mb-5">
                    <img src="https://www.meesho.com/mcheckout/build/static/media/empty-cart.b87f87595dfaa8606bfe.png" alt="Empty Cart" className="empty-cart-image mb-4" />
                    <h2>Your Cart is Empty</h2>
                    <Link to="/"><button className="shop-now-btn mt-3 view-btn">View Products</button></Link>
                </div>
            ) : (
                <div className="container mt-5 d-flex">
                    <div className="row">
                        {cartitem.map((info, index) => (
                            <div className="col-md-10 mx-4" key={index}>
                                <div className="d-flex border p-3 mb-3">
                                    <div className="product-image mr-3">
                                        <a href="#">
                                            <img src={info.image_link} className="img-fluid left" alt="Product" />
                                        </a>
                                    </div>
                                    <div className="flex-grow-1 d-flex flex-column justify-content-between right">
                                        <div className="product-info">
                                            <div className="mb-2">
                                                <p className="text-dark font-weight-bold">{info.Product_Name}</p>
                                            </div>
                                            <div className="mb-2">
                                                <p className="text-dark font-weight-bold">Category: {info.category}</p>
                                            </div>
                                            <div className="mb-2">
                                                <p className="text-dark font-weight-bold">Pattern: {info.Pattern}</p>
                                            </div>
                                            <div className="mb-2">
                                                <span className="font-weight-bold">{info.price}$</span>
                                                <span className="text-muted discounted-price mx-2">{info.del_price}$</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column align-items-start mt-3">
                                            <div className="quantity-control mb-2">
                                                <button onClick={() => handleDecreaseQuantity(info._id)}>-</button>
                                                <input type="text" value={quantities[info._id] || 1} className="mx-2" readOnly />
                                                <button onClick={() => handleIncreaseQuantity(info._id)}>+</button>
                                            </div>
                                            <div className="save-remove">
                                                <button className="btn-remove" onClick={() => removeitem(info._id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-md-4 mt-2">
                        <div className="price-details border p-3 mb-3">
                            <div className="price-details-header">Price Details</div>
                            <div className="price-item">
                                <div className="price-label">Price ({cartitem.length} item{cartitem.length > 1 ? 's' : ''})</div>
                                <div className="price-value">{priceDetails.totalPrice}$</div>
                            </div>
                            <div className="price-item">
                                <div className="price-label">Discount</div>
                                <div className="price-value text-danger">− {priceDetails.totalDiscount}$</div>
                            </div>
                            <div className="price-item">
                                <div className="price-label">Delivery Charges</div>
                                <div className="price-value">
                                    <span className="text-success ml-2">Free</span>
                                </div>
                            </div>
                            <div className="price-item total-amount">
                                <div className="price-label">Total Amount</div>
                                <div className="price-value">{priceDetails.totalAmount}$</div>
                            </div>
                            <div className="savings-message">
                                You will save {priceDetails.totalDiscount}$ on this order
                            </div>
                        </div>
                           <button type="button" className="btn inherit px-4 mx-4 py-2" id='btn1'onClick={handlebtn}>continue</button>
                        <div className="footer-note">
                            Safe and Secure Payments. Easy returns. 100% Authentic products.
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default AddtoCart;
