import React, { useCallback, useEffect, useState } from 'react'
import ProductInfo from '../../Components/ProductInfo/ProductInfo'
import NavBar from '../../Components/NavBar/NavBar'
import FooterSeection from '../../Components/FooterSeection/FooterSeection'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
    const { _id } = useParams();
    // req.session.id = id;
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null)
    const { productid } = useParams();
    const [userId, setUserId] = useState(null);
    const [loading, setLoading] = useState(false);


    // Fetch userId from the token
    useEffect(() => {
        const jwtToken = localStorage.getItem('token');
        if (jwtToken) {
            const tokenParts = jwtToken.split('.');
            const encodedPayload = tokenParts[1];
            const decodedPayload = atob(encodedPayload);
            const user = JSON.parse(decodedPayload);
            setUserId(user.id);
        } else {
            console.log('JWT token not found in local storage');
        }
    }, []);

    useEffect(() => {
        async function fetchProductById() {
            try {
                if (!_id) {
                    setError('Product ID is missing.');
                    return;
                }
                const response = await axios.get(`http://localhost:4000/eiser/products/getproductbyid/${_id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
                setError(error.message)
            }
        }
        fetchProductById();
    }, [_id]);


    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <NavBar  />
            <ProductInfo product={product} userId={userId} productId={_id} />
            <FooterSeection />
        </div>
    )
}

export default ProductPage
