import React, { useState, useEffect, useRef } from 'react';
import './Products.css';

function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleProducts, setVisibleProducts] = useState(new Set());
  const productRefs = useRef({});

  const products = [
    {
      id: 'fullcream-milk',
      title: 'Full Cream Milk',
      description: 'Rich, creamy texture with higher fat content. Best suited for tea, coffee, desserts, and recipes requring a fuller taste. Provides higher calories, ideal for growing children and people needing extra nutrition.',
      icon: '🥛',
      fullDescription: 'Rich, creamy texture with higher fat content. Best suited for tea, coffee, desserts, and recipes requring a fuller taste. Provides higher calories, ideal for growing children and people needing extra nutrition.',
      uses: [
        'Beverages, Cooking, Smoothies',
        'Daily Nutritional Intake'
      ],
      features: [
        'No preservatives',
        'Shelf life: 5-7 days (chilled)',
        'Available in two variants'
      ],
      packaging: 'Full Cream Milk: 1L & 2L',
      images: [
        '/images/fullcream-milk1.jpg',
        '/images/fullcream-milk2.jpg'
      ]
    },
    {
      id: 'lowfat-milk',
      title: 'Low Fat Milk',
      description: 'Contains reduced fat content, making it lighter and healthier for everyday use. Suitable for weight conscious consumers or those on low-fat diet. Retains essential nutrients while offering a lighter taste.',
      icon: '🥛',
      fullDescription: 'Contains reduced fat content, making it lighter and healthier for everyday use. Suitable for weight conscious consumers or those on low-fat diet. Retains essential nutrients while offering a lighter taste.',
      uses: [
        'Beverages, Cooking, Smoothies',
        'Daily Nutritional Intake'
      ],
      features: [
        'No preservatives',
        'Shelf life: 5-7 days (chilled)',
        'Available in two variants'
      ],
      packaging: 'Low Fat Milk: 1L & 2L',
      images: [
        '/images/lowfat-milk1.jpg',
        '/images/lowfat-milk2.jpg'
      ]
    },
    {
      id: 'fullcream-powder',
      title: 'Full Cream Milk Powder',
      description: 'Made from whole milk with rich fat content. Provides creamy flavor and smooth texture, great for tea, coffee, desserts, and ice cream mixes. Excellent for domestic and foodservice use where richness is desired.',
      icon: '🍼',
      fullDescription: 'Made from whole milk with rich fat content. Provides creamy flavor and smooth texture, great for tea, coffee, desserts, and ice cream mixes. Excellent for domestic and foodservice use where richness is desired.',
      uses: [
        'Tea, Coffee',
        'Desserts, Ice Cream',
        'Instant Mixes'
      ],
      features: [
        'Creamy and smooth taste',
        'Ideal for domestic and foodservice use',
        'Export-quality packaging'
      ],
      packaging: '1.8 kg desk pack',
      images: [
        '/images/fullcream-powder1.jpg',
        '/images/fullcream-powder2.jpg'
      ]
    },
    {
      id: 'skim-powder',
      title: 'Skim Milk Powder',
      description: 'Low in fat but high in protein, ideal for health-conscious diets. Best for beverages, bakery, confectionery, and nutritional products. Longer shlef life and easy solubility in hot and cold liquids.',
      icon: '🥛',
      fullDescription: 'Low in fat but high in protein, ideal for health-conscious diets. Best for beverages, bakery, confectionery, and nutritional products. Longer shlef life and easy solubility in hot and cold liquids.',
      uses: [
        'Hot/Cold Beverages',
        'Confectionery & Baking',
        'Dry Mixes, Baby Foods'
      ],
      features: [
        'Excellent solubility',
        'Long shelf life (12+ months)',
        'Free-flowing powder'
      ],
      packaging: '1.8 kg desk pack',
      images: [
        '/images/skimmed1.jpg',
        '/images/skimmed2.jpg'
      ]
    },
    {
      id: 'fresh-cream',
      title: 'Fresh Cream',
      description: 'Thick and creamy, suitable for desserts, gravies, and professional baking.',
      icon: '🍰',
      fullDescription: 'Thick and creamy, suitable for desserts, gravies, and professional baking.',
      uses: [
        'Cake toppings',
        'Creamy sauces',
        'Shakes & Coffees'
      ],
      features: [
        'Excellent whip',
        'Refrigeration needed',
        'Smooth and stable texture'
      ],
      packaging: '170g tubs or pouches',
      images: [
        '/images/freshcream1.jpg',
        '/images/freshcream2.jpg'
      ]
    },
    {
      id: 'ghee',
      title: 'Desi Ghee',
      description: 'Traditional clarified butter made for purity, aroma, and long shelf life.',
      icon: '🧈',
      fullDescription: 'Traditional clarified butter made for purity, aroma, and long shelf life.',
      uses: [
        'Cooking & Frying',
        'Ayurvedic/Wellness Use',
        'Sweet Preparation'
      ],
      features: [
        'Granular texture',
        'Lactose-free',
        'Stable without refrigeration'
      ],
      packaging: '500ml jars or pouches',
      images: [
        '/images/ghee1.jpg',
        '/images/ghee2.jpg'
      ]
    },
    {
      id: 'butter',
      title: 'Fresh Butter',
      description: 'Rich dairy butter available in both salted and unsalted variants.',
      icon: '🧈',
      fullDescription: 'Rich dairy butter available in both salted and unsalted variants.',
      uses: [
        'Spreads & Toast',
        'Cooking & Baking',
        'Restaurant/Hotel Use'
      ],
      features: [
        'Smooth texture',
        'Easy to melt',
        'Long shelf life under refrigeration'
      ],
      packaging: '200g foil-wrapped packs',
      images: [
        '/images/butter1.jpg',
        '/images/butter2.jpg'
      ]
    },
    {
      id: 'paneer',
      title: 'Paneer',
      description: 'Fresh, soft cottage cheese with a mild flavor and firm texture. Perfect for cooking and grilling.',
      icon: '🧀',
      fullDescription: 'Fresh, soft cottage cheese with a mild flavor and firm texture. Perfect for cooking and grilling.',
      uses: [
        'Indian curries (like Palak Paneer, Paneer Butter Masala)',
        'Snacks & Starters (Tikka, Rolls)',
        'High-protein diets and vegetarian meals'
      ],
      features: [
        'Ready to cook',
        'Vacuum-sealed for extended freshness',
        'Rich in protein and calcium',
        'No preservatives'
      ],
      packaging: '200g blocks (Larger packs available on request for food service)',
      images: [
        '/images/paneer1.jpg',
        '/images/paneer2.jpg'
      ]
    },
    {
      id: 'yogurt',
      title: 'Yogurt',
      description: 'Smooth and naturally fermented yogurt, set or stirred.',
      icon: '🥣',
      fullDescription: 'Smooth and naturally fermented yogurt, set or stirred.',
      uses: [
        'Direct consumption',
        'Smoothies, Dips',
        'Lassi, Raita'
      ],
      features: [
        'Digestive health benefits',
        'Creamy and fresh taste',
        'Customizable for flavored variants'
      ],
      packaging: '470g tubs & 1.4kg tubs',
      images: [
        '/images/yogurt1.jpg',
        '/images/yogurt2.jpg'
      ]
    },
    {
      id: 'cheese',
      title: 'Cheese',
      description: 'Processed cheese ideal for cooking, baking, and direct use.',
      icon: '🧀',
      fullDescription: 'Processed cheese ideal for cooking, baking, and direct use.',
      uses: [
        'Pizza & Pasta',
        'Sandwiches, Gratin',
        'Commercial Kitchens'
      ],
      features: [
        'Great melting properties',
        'Customizable cuts & shreds',
        'Stretchy texture for food service'
      ],
      packaging: '200g blocks or slices',
      images: [
        '/images/cheese1.jpg',
        '/images/cheese2.jpg'
      ]
    }
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const productId = entry.target.dataset.productId;
          if (productId) {
            setVisibleProducts(prev => new Set([...prev, productId]));
          }
        }
      });
    }, observerOptions);

    // Observe all product elements
    Object.values(productRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Keyboard event listener
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const openModal = (product) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProduct(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProduct && selectedProduct.images.length > 1) {
      setCurrentImageIndex(
        currentImageIndex === selectedProduct.images.length - 1 
          ? 0 
          : currentImageIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProduct && selectedProduct.images.length > 1) {
      setCurrentImageIndex(
        currentImageIndex === 0 
          ? selectedProduct.images.length - 1 
          : currentImageIndex - 1
      );
    }
  };

  const handleModalClick = (e) => {
    if (e.target.className === 'modal') {
      closeModal();
    }
  };

  return (
    <section id="products" className="products-section">
      <div className="products-container">
        <div className="products-content">
          <div className="page-title">
            <h1>Our Premium Products</h1>
            <p>High-quality, hygienically processed dairy products for global distribution</p>
          </div>

          <div className="products-grid">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`product-item ${visibleProducts.has(product.id) ? 'animate-in' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                data-product-id={product.id}
                ref={el => productRefs.current[product.id] = el}
              >
                <div className="product-image-container">
                  <img 
                    src={product.images[0]} 
                    alt={product.title}
                    className="product-item-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="product-icon-fallback" style={{display: 'none'}}>
                    {product.icon}
                  </div>
                </div>
                
                <div className="product-content">
                  <h3 className="product-title">{product.title}</h3>
                  <p className="product-description">{product.description}</p>
                  <button 
                    className="see-more-btn" 
                    onClick={() => openModal(product)}
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Modal */}
        {selectedProduct && (
          <div className="modal" onClick={handleModalClick}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close" onClick={closeModal}>&times;</button>
              
              <div className="modal-body">
                <div className="modal-left">
                  <div className="image-container">
                    {selectedProduct.images.length > 1 && (
                      <button className="nav-btn prev-btn" onClick={prevImage}>
                        &#8249;
                      </button>
                    )}
                    <img 
                      src={selectedProduct.images[currentImageIndex]} 
                      alt={`${selectedProduct.title} ${currentImageIndex + 1}`}
                      className="product-modal-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="image-placeholder" style={{display: 'none'}}>
                      <span className="placeholder-icon">{selectedProduct.icon}</span>
                    </div>
                    {selectedProduct.images.length > 1 && (
                      <button className="nav-btn next-btn" onClick={nextImage}>
                        &#8250;
                      </button>
                    )}
                  </div>
                </div>

                <div className="modal-right">
                  <div className="modal-header">
                    <h2 className="modal-title">{selectedProduct.title}</h2>
                    <p className="modal-size">{selectedProduct.packaging}</p>
                  </div>

                  <div className="tabs">
                    <button className="tab-btn active">Description</button>
                    <button className="tab-btn">Nutritional Benefits</button>
                  </div>

                  <div className="modal-sections">
                    <div className="modal-section">
                      <p className="modal-description">{selectedProduct.fullDescription}</p>
                    </div>
                    
                    <div className="modal-section">
                      <h3 className="section-title">Uses</h3>
                      <ul className="uses-list">
                        {selectedProduct.uses.map((use, index) => (
                          <li key={index}>{use}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-section">
                      <h3 className="section-title">Features</h3>
                      <ul className="features-list">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="modal-section">
                      <h3 className="section-title">Packaging</h3>
                      <div className="packaging-info">
                        <strong>Available in:</strong> {selectedProduct.packaging}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Products;