import React from 'react';
import useCustomers from '../../hooks/useCustomers';
import Review from '../Review/Review';

const Reviews = () => {
    const [customerReviews, setCustomerReviews] = useCustomers();
    return (
        <div className="cart-container">
            {
                customerReviews.map(customerReview => <Review
                key={customerReview.key}
                customerReview={customerReview}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;