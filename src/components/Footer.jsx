import React from 'react';
// import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1 */}
                <div className="footer-column">
                    <div className="footer-logo">
                        <img src="https://img.icons8.com/ios-filled/50/ffc107/cheese.png" alt="logo" />
                        <span className="logo-text">Wintage</span>
                    </div>
                    <p>Premium dairy products crafted<br />with tradition and passion since 1995.</p>
                </div>

                {/* Column 2 */}
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#Testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-column">
                    <h4>Products</h4>
                    <ul>
                        <li><a href="#">Cheeses</a></li>
                        <li><a href="#">Yogurts</a></li>
                        <li><a href="#">Milk</a></li>
                        <li><a href="#">Butter</a></li>
                        <li><a href="#">Seasonal Specials</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="footer-column">
                    <h4>Contact Info</h4>
                    <ul className="contact-info">
                        <li><span>📍</span>123 Dairy Lane, Farmington, CA 12345</li>
                        <li><span>📞</span>(555) 123-4567</li>
                        <li><span>✉️</span>hello@wintagedairy.com</li>
                    </ul>
                </div>
            </div>

            <hr />

            <div className="footer-bottom">
                <p>© 2023 Wintage Dairy. All rights reserved.</p>
                <div className="footer-socials">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaPinterestP /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
