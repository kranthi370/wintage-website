import React from "react";

function Contact() {
    return (
        <section className="contact-section">
            <div className="contact-container">
                {/* Left Side */}
                <div className="contact-info">
                    <h2>Get In Touch</h2>
                    <p>
                        Have questions about our products or want to place a wholesale order?
                        We'd love to hear from you!
                    </p>

                    <div className="info-item">
                        <span className="icon">📍</span>
                        <div>
                            <strong>Our Farm</strong>
                            <p>123 Dairy Lane, Farmington, CA 12345</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="icon">📞</span>
                        <div>
                            <strong>Call Us</strong>
                            <p>(555) 123-4567</p>
                        </div>
                    </div>

                    <div className="info-item">
                        <span className="icon">✉️</span>
                        <div>
                            <strong>Email Us</strong>
                            <p>hello@wintagedairy.com</p>
                        </div>
                    </div>

                    <div className="social-icons">
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Instagram" /></a>
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Facebook" /></a>
                        <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" /></a>
                    </div>
                </div>

                {/* Right Side */}
                <div className="contact-form">
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Message" rows="5"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact