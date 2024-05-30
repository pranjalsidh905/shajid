import React from 'react'
import './FooterSeection.css'

function FooterSeection() {
    return (
        <footer className="footer">
            <div className="product-container">
                <div className="product-rows">
                    <div className="top-product">
                        <ul>
                            <h4>top product</h4>
                            <li><a href="#">Managed website</a></li>
                            <li><a href="#">Managed reputation</a></li>
                            <li><a href="#">power tools</a></li>
                            <li><a href="#">Marketing website</a></li>
                        </ul>
                    </div>
                    <div className="top-product">
                        <ul>
                            <h4>Quick Links</h4>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Brand Assets</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="top-product">
                        <ul>
                            <h4>Features</h4>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Brand Assets</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="top-product">
                        <ul>
                            <h4>Resources</h4>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Research</a></li>
                            <li><a href="#">Experts</a></li>
                            <li><a href="#">Agencies</a></li>
                        </ul>
                    </div>
                    <div className="top-product">
                        <ul>
                            <h4>Newsletter</h4>
                            <li>
                                <p className="para">You can trust us. we only send promo offers,</p>
                            </li>
                            <form action>
                                <input type="email" placeholder="Your Email Address" />
                                <input type="button" defaultValue="Subscribe" />
                            </form>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-text">
                        <p>Copyright ©2024 All rights reserved | This template is made with <span><i className="fa-regular fa-heart" /> </span> by Mohammed Sajid</p>
                    </div>
                    <div className="footer-logo">
                        <a href="#"><i className="fa-brands fa-facebook" /></a>
                        <a href="#"><i className="fa-brands fa-twitter" /></a>
                        <a href="#"><i className="fa-brands fa-dribbble" /></a>
                        <a href="#"><i className="fa-brands fa-behance" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSeection