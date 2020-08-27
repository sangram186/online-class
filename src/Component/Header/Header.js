import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    const courseItem = props.cart;
    const totalPrice= courseItem.reduce((total, price) => total + price.price, 0)

    return (
        <div className='header'>
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="cart">
                    <button className='bg-green'>Total Price <span className='course-buy'>${totalPrice}</span></button>
                </div>
            </div>
            <div className="banner">
                <img src="https://img-a.udemycdn.com/notices/featured_banner/image_udlite/09dc9cd2-96ec-41a3-b357-62248bc24623.jpg" alt=""/>
            </div>
            <div className="banner-text">
                <h1>Sale ends today</h1>
                <p>Skills activated for as low as $9.99. Ends tonight.</p>
            </div>
        </div>
    );
};

export default Header;