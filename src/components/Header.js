import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/combined-shape.png";
import shoppingCart from "../assets/shopping-cart.png";
import "../styles/header.scss";

const Header = () => {
    return (
        <header>
            <nav className="container">
                <Link to="/" className="logo-container">
                    <img src={logo} alt={"logo"} className="logo-image" />
                    <h1 className="title">Ezshop</h1>
                </Link>
                <Link to="/cart" className="user-info">
                    <img src={shoppingCart} alt={"shopping-cart"} />
                </Link>
            </nav>
        </header>
    )
}

export default Header
