import React from 'react';
import './Review.css';

const Review = (props) => {
    const {name, picture,  describe, rating} = props.customerReview;
    return (
        <div className='cart-detail-container'>
                <img src={picture} alt="" />
                <h4>{name}</h4>
                <p>{describe}</p>
                <p>Rating: <span className='star-style'>{rating}</span></p>
        </div>
    );
};

export default Review;