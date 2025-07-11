import React from 'react';
// import './Products.css';
import image1 from "/src/assets/images/cheese.jpg"
import image2 from "/src/assets/images/freshcreame.jpg"
import image3 from "/src/assets/images/full-cream-milk.jpg"
import image4 from "/src/assets/images/ghee.jpg"
import image5 from "/src/assets/images/panner.jpg"
import image6 from "/src/assets/images/yougurt.jpg"

function Products() {
  const products = [
    {
      id: 1,
      title: 'Artisan Cheese Collection',
      description: 'Aged to perfection with traditional methods for rich, complex flavors.',
      price: '$12.99',
      image: image1,
    },
    {
      id: 2,
      title: 'Fresh cream',
      description: 'Organic farm-fresh cream, directly from local farmers.',
      price: '$4.99',
      image: image2,
    },
    {
      id: 3,
      title: 'Farm Fresh Milk',
      description: 'Organic farm - fresh milk, directly from local farmers.',
      price: '$6.49',
      image: image3,
    },
    {
      id: 4,
      title: 'Ghee',
      description: 'Fresh and soft ghee perfect for curries, bake items and snacks.',
      price: '$5.99',
      image: image4,
    },
    {
      id: 5,
      title: 'Paneer Block',
      description: 'Fresh and soft paneer perfect for curries and snacks.',
      price: '$8.99',
      image: image5,
    },
    {
      id: 6,
      title: 'Yogurt Variety',
      description: 'Smooth and flavorful yogurt selection made with natural ingredients.',
      price: '$7.49',
      image: image6,
    },
  ];

  return (
    <section className="products">
      <div className="product-content">
        <div className="products-text">
          <h2 className="heading">Our Premium Selection</h2>
          <p>
            From farm to table, we ensure the highest quality dairy products that your family deserves.
          </p>
        </div>

        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="price">{product.price}</span>
                <button className="button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <div className="product-button">
          <button className="btn-product">View All Products</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
