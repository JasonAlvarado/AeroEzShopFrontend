import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import CartItem from './CartItem';
import alertify from 'alertifyjs';
import "../styles/cart.scss"

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);


    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.quantity;
            price += item.quantity * item.price;
        });

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const buyProducts = () => {
        alertify.success('Compra finalizada');
    }

    return (
        <div className="container">
            <div>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <div>
                <h4>Productos del carrito</h4>
                <div>
                    <span>TOTAL: ({totalItems} productos)</span>
                    <span>$ {totalPrice}</span>
                </div>
                <button onClick={buyProducts} className="buy-btn">
                    Comprar
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};

export default connect(mapStateToProps)(Cart);
