import React, { useState } from 'react'
import logo from "../assets/combined-shape.png";
import shoppingCart from "../assets/shopping-cart.png";
import "../styles/header.scss";

const Header = () => {
    const [availableCoins, setAvailableCoins] = useState(3000);

    return (
        <header>
            <nav className="container">
                <a href="#" className="logo-container">
                    <img src={logo} alt={"logo"} className="logo-image" />
                    <h1 className="title">Ezshop</h1>
                </a>
                <div className="user-info">
                    <p>$3000</p>
                    <img src={shoppingCart} alt={"shopping-cart"} />
                </div>
            </nav>
        </header>
    )
}

export default Header
