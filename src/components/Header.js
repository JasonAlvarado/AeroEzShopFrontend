import React, { useState } from 'react'
import logo from "../assets/combined-shape.png";
import shoppingCart from "../assets/shopping-cart.png";

const Header = () => {
    const [availableCoins, setAvailableCoins] = useState(3000);

    return (
        <nav>
            <img src={logo} alt={"logo"} />
            <h1><strong>Ez</strong>shop</h1>
            <p>${availableCoins}</p>
            <img src={shoppingCart} alt={"shopping-cart"} />
        </nav>
    )
}

export default Header
