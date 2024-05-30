import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../Components/NavBar/NavBar';
import AddtoCart from '../../Components/AddtoCart/AddtoCart';
import { useParams } from 'react-router-dom';

const AddToCartButton = () => {
    const [userId, setUserId] = useState(null);
    const [cart, setCart] = useState({});


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
    //  console.log(userId)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/users/getuser/${userId}`);
                setCart(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        if (userId) {
            fetchUser();
        }
    }, [userId]);  


    return (
        <>
            <NavBar product={cart} />
            <AddtoCart product = {cart} userId={userId} />
        </>
    );
};

export default AddToCartButton;
