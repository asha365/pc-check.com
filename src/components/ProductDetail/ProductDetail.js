import React from 'react';
import useCustomers from '../../hooks/useCustomers';
import Cart from '../Cart/Cart';
import './ProductDetail.css';

const ProductDetail = (props) => {
    const {name, picture, description} = props.product;
    const [customerReviews, setCustomerReviews] = useCustomers();
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


        <section className='all-review'>
        <h1>Customer Reviews (3)</h1>
            <div className="cart-container">
                
                {
                    customerReviews.map(customerReview => <Cart
                    key={customerReview.id}
                    customerReview={customerReview}
                    ></Cart>)
                }
            </div>
        </section>
        </div>


    );
};

export default ProductDetail;