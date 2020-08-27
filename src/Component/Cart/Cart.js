import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const carts = props.cart;
    // cartsLength = carts.length;
    console.log(carts);
    return (
        <div className="main-cart">
            <h2>Enrolled Courses {carts.length}</h2>
            <ul>
            {
                // I used bootstrap class here **************
                carts.map(cart => <li className='enrolled-course border-bottom'><FontAwesomeIcon icon={faChevronRight} /> {cart.title}</li>)
            }   
            </ul>
            
        </div>
    );
};

export default Cart;