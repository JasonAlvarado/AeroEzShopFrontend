import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext';
import alertify from "alertifyjs";
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import "../../styles/cart.scss";

const Cart = () => {
    const { cartItems, cleanCart } = useContext(CartContext);

    const buy = () => {
        alertify.success('Compra exitosa');
        cleanCart();
    }

    return (
        <div className="container">
            <h1 className="cart-title">Carrito de compra</h1>
            {
                (cartItems && cartItems.length > 0) ? (
                    <div>
                        <ul className="cart-item-container">
                            {
                                cartItems.map((product) => (
                                    <CartItem
                                        key={product.id}
                                        product={product}
                                    />)
                                )
                            }
                        </ul>
                        <div className="cart-details">
                            <strong>Precio total: $
                                {
                                    Number(cartItems.reduce((amount, item) =>
                                        (item.price * item.quantity) + amount, 0
                                    )).toFixed(2)
                                }
                            </strong>
                            <br />
                            <button className="buy-btn" onClick={buy}>Comprar</button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h4>No se agregaron productos</h4>
                        <Link to="/" className="link">
                            Visite la tienda para agregar productos
                        </Link>
                    </div>
                )
            }
        </div >
    )
}

export default Cart
