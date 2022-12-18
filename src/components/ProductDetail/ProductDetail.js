import React, { useEffect, useState } from 'react';
// import useCustomers from '../../hooks/useCustomers';
import Cart from '../Cart/Cart';
import './ProductDetail.css';

const ProductDetail = (props) => {
    const {name, picture, description} = props.product;

    const [views, setViews] = useState([]);
    const [visible, setVisible] = useState(3);

    useEffect(() =>{
        fetch('customers.json')
        .then(res => res.json())
        .then(data => setViews(data))
    }, [])

    const seeAllReview = () =>{
        setVisible((preValue) => preValue + 3)
    }
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
        <h1>Customer Reviews (6)</h1>
            <div className="cart-container">
                
                {
                    views.slice(0, visible).map(view => <Cart
                    key={view.id}
                    view={view}
                    ></Cart>)
                }
            </div>
            
            <button className='see-all-btn' onClick={seeAllReview}>See All Reviews</button>
            
            
        </section>
        </div>


    );
};

export default ProductDetail;