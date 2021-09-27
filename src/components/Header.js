import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/combined-shape.png";
import shoppingCart from "../assets/shopping-cart.png";
import { connect } from "react-redux";
import "../styles/header.scss";

const Header = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        let count = 0;

        cart.forEach((item) => {
            count += item.qty;
        });
    }, [cart, cartCount])

    return (
        <header>
            <nav className="container">
                <Link to="/" className="logo-container">
                    <img src={logo} alt={"logo"} className="logo-image" />
                    <h1 className="title">Ezshop</h1>
                </Link>
                <Link to="/cart" className="user-info">
                    <h3 className="cart-title">Cart</h3>
                    <img src={shoppingCart} alt={"shopping-cart"} />
                    <p>{cartCount}</p>
                </Link>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Header);
