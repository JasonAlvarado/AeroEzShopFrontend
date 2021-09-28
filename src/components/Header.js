import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../context/cart/CartContext';
import shoppingCart from "../assets/shopping-cart.png";
import logo from "../assets/combined-shape.png";
import "../styles/header.scss";

const Header = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <header>
            <nav className="container">
                <Link to="/" className="logo-container">
                    <img src={logo} alt={"logo"} className="logo-image" />
                    <h1 className="title">Ezshop</h1>
                </Link>
                <Link to="/cart" className="cart-info">
                    <img src={shoppingCart} alt={"shopping-cart"} />
                    {cartItems.length > 0 && (
                        <p className="prods-count-number">{cartItems.length}</p>
                    )}
                </Link>
            </nav>
        </header>
    )
}

export default Header;
