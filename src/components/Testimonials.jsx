import React from "react";

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Sarah Johnson',
            avatar: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
            rating: 5,
            feedback:
                "The Wintage aged gouda is absolutely incredible! The depth of flavor is unlike anything I've tasted from commercial brands. It's become a staple in our household.",
        },
        {
            id: 2,
            name: 'David Lee',
            avatar: 'https://cdn-icons-png.flaticon.com/512/236/236831.png',
            rating: 4,
            feedback:
                "Great taste and top-notch quality. I appreciate the natural ingredients and the fast delivery.",
        },
        {
            id: 3,
            name: 'Priya Singh',
            avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922561.png',
            rating: 5,
            feedback:
                "Absolutely love their products! You can taste the freshness. Highly recommended for families.",
        },
    ];

    return (
        <section className="testimonials">
            <div className="testimonial-content">
                <div className="testimonial-story">
                    <h2 className="testimonial-heading">What Our Customers Say</h2>
                    <p className="testimonial-text">Don't just take our word for it - hear from our satisfied customers</p>
                </div>
                <div className="testimonials-container">
                    {testimonials.map((item) => (
                        <div className="testimonial-card" key={item.id}>
                            <div className="user-info">
                                <img src={item.avatar} alt={item.name} className="avatar" />
                                <div>
                                    <strong className="strong">{item.name}</strong>
                                    <div className="stars">
                                        {'★'.repeat(item.rating)}
                                        {'☆'.repeat(5 - item.rating)}
                                    </div>
                                </div>
                            </div>
                            <p className="feedback">"{item.feedback}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials