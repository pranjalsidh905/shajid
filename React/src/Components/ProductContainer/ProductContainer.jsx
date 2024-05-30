import React, { useEffect, useState } from 'react'
import './ProductContainer.css'
import { Link } from 'react-router-dom'
import axios from 'axios';

function ProductContainer() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:4000/eiser/products/getproducts');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    return (

        <section className="product-container">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="feature-product">
                        <div className="feature-text">
                            <div className="main-text">
                                <span>FEATURED PRODUCT</span>
                            </div>
                            <p>Bring called seed first of third give itself now ment</p>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {products.map(product => (
                        <div className="col-lg-4 col-md-6">
                            <div className="product-box">
                                <div className="product-1">
                                    <Link to={`/product/${product._id}`}>
                                        <img src={product.image_link} alt="Product" />
                                    </Link>
                                </div>
                                <div className="hover-views">
                                    <div className="product-hov">
                                        <a href="#"><i className="fa-regular fa-eye" /></a>
                                        <a href="#"><i className="fa-regular fa-heart" /></a>
                                        <a href="#"><i className="fa-solid fa-cart-shopping" /></a>
                                    </div>
                                    <div className="text-boxes">
                                        <a href="#">
                                            <h3>{product.Product_Name}</h3>
                                        </a> <br />
                                        <span className="price">${product.price}</span>
                                        <del className="d-price">${product.del_price}</del>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}




                </div>
            </div>
        </section>
    )
}

export default ProductContainer