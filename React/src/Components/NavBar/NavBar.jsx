import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link, useNavigate, } from 'react-router-dom'
import axios from 'axios';

function NavBar({ product }) {
  const [_id, setUserid] = useState(false);
  const [userinfo, setUserinfo] = useState({})
  const [productid, setProductid] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = localStorage.getItem('token');
    if (jwtToken) {
      const tokenParts = jwtToken.split('.');
      const encodedPayload = tokenParts[1];
      const decodedPayload = atob(encodedPayload);
      const user = JSON.parse(decodedPayload);
      // console.log(user.id)
      setUserid(user.id);
    } else {
      console.log('JWT token not found in local storage');
    }
  }, []);
  const logout = async () => {
    const jwtToken = localStorage.removeItem('token');
    setUserid(false);
  }
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/users/getuser/${_id}`);
        setUserinfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (_id) {
      fetchUser();
    }
  }, [_id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = product?.cart || [];
        const promises = products.map((item) => axios.get(`http://localhost:4000/eiser/products/getproductbyid/${item._id}`));
        const responses = await Promise.all(promises);
        const data = responses.map((response) => response.data);
        // console.log(data);
        setProductid(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [product]);


  const cartbtn = async () => {

    navigate(`/addcart`);
  }

  return (
    <>
      <section className="navbar">
        <div className="header">
          <div className="cont">
            <div className="containers">
              <div className="header-left">
                <p>Phone: +01 256 25 235</p>
                <p>email: info@eiser.com</p>
              </div>
              <div className="header-right">
                <ul>
                  <li><a href="#">Gift Card</a></li>
                  <li><a href="#">Track Order</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="header-down">
            <div className="logo">
              <img src="https://themewagon.github.io/eiser/img/logo.png" alt="logo image" />
              <div className="burger">
                <button><i className="fa fa-bars" /></button>
              </div>
            </div>
            <div className="header-bar-right">
              <div className="bar">
                <ul>
                  <li><Link to='/'><a href="#">Home</a></Link></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Pages</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="bar-right">
                <ul>
                  <li><a href="#" className="icon"><i className="fa fa-search" /></a></li>
                  <li><a href="" className="icon" onClick={cartbtn}><i className="fa fa-shopping-cart" /></a></li>
                  <li className="nav-item dropdown userdrop">
                    <a href="#" className="icon nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-user" />
                    </a>
                    {_id ? (
                      <div className="dropdown-menu usermenu" aria-labelledby="navbarDropdown">
                        <h6 className="dropdown-item" >{userinfo.user_name}</h6>
                        <Link className="dropdown-item" onClick={logout}>Logout</Link>
                      </div>
                    ) : (
                      <div className="dropdown-menu usermenu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="/signup">SignUp</Link>
                        <Link className="dropdown-item" to="/login">Login</Link>
                      </div>
                    )}
                  </li>
                  <li><a href="#" className="icon"><i className="fa fa-heart" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default NavBar