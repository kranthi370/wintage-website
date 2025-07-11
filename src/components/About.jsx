import React from 'react'

function About() {
    const features = [
        {
            id: 1,
            icon: '', 
            title: 'Sustainable Farming',
            description: 'Ethical treatment of animals and land',
        },
        {
            id: 2,
            icon: '',
            title: 'Award Winning',
            description: 'Recognized for excellence in dairy production',
        },
        {
            id: 3,
            icon: '', 
            title: 'Handcrafted',
            description: 'Made with care and attention',
        },
        {
            id: 4,
            icon: '', 
            title: 'Fast Delivery',
            description: 'Fresh to your doorstep',
        },
    ];

    return (
        <section className='about'>
            <div className="about-content">
                <div className="about-image">
                    <img src="src/assets/images/wintage-about.jpg" alt="wintage logo" />
                </div>
                <div className="about-story">
                    <h2 className="about-heading">Our Story</h2>
                    <p className='about-text'>
                        Founded in 1995, Wintage began as a small family dairy farm in the heart of the countryside. What started as a passion for traditional dairy craftsmanship has grown into a beloved brand known for its exceptional quality and taste.</p>
                    <p className='about-text'>We still use the same time-honored techniques passed down through generations, combined with sustainable farming practices that respect both the animals and the land.</p>

                    <div className="features-container">
                        {features.map((item) => (
                            <div key={item.id} className="feature-card">
                                <img src={item.icon} alt={item.title} className="feature-icon" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <button className='about-button'>Learn More About Us</button>
                </div>
            </div>
        </section>
    )
}

export default About