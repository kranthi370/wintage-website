import React from "react";

function Community() {
    return(
        <section className="community">
            <div className="community-content">
                <h2 className="community-heading">Join Our Dairy Community</h2>
                <p className="community-text">Subscribe to our newsletter for exclusive offers, new product announcements, and <br />dairy tips straight to your inbox.</p>
                <form action="" className="community-form">
                    <input type="email" placeholder="Your email address" className="community-input"/>
                    <button className="community-button" type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Community