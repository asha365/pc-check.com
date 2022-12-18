import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {name, picture,  describe, rating} = props.view;
    return (
        <div className='cart-detail-container'>
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>{describe}</p>
                <p>Rating: <span className='star-style'>{rating}</span></p>
        </div>
        
    );
};

export default Cart;