import React from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import './Home.css';

const Home = () => {
    const products = [
        {
        "id": 1,
        "name": "Apple MacBook Pro 12.1 A1502",
        "picture": "images/laptop.jpg", 
        "description": "Du hast wirklich hohe Ansprüche und willst dich nicht mit dem Zweitbesten zufriedengeben? Dieses Apple MacBook Pro 12.1 ist ein Notebook der absoluten Spitzenklasse - ob das Retina-Display mit einer unfassbaren Auflösung von 2560x1600 Pixeln, 8 GB Arbeitsspeicher oder die schnelle SSD-Festplatte, dieses MacBook lässt absolut nichts zu wünschen übrig."
        }
    ]
    return (
        <div>
            {
                products.map(product => <ProductDetail
                    key={product.id}
                    product={product}
                ></ProductDetail>)
            }  
        </div>
    );
};

export default Home;