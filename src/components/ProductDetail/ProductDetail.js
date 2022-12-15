import React from 'react';
import './ProductDetail.css';

const ProductDetail = (props) => {
    const {name, picture, description} = props.product;
    return (
        <div>
            
        <div className='laptop-container'>
            <div className="laptop-description">
                <h1>{name}</h1>
                <p>{description}</p>
                <button className='live-demo-btn'>Live demo</button>
            </div>
            <div className="image-container">
                <img src={picture} alt="" />
            </div>
        </div> 


        </div>
    );
};

export default ProductDetail;