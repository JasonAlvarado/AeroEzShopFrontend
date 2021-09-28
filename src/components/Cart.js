import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext';
import alertify from "alertifyjs";
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import "../styles/cart.scss";

const Cart = () => {
    const { cartItems, cleanCart } = useContext(CartContext);

    const buy = () => {
        alertify.success('Compra exitosa');
        cleanCart();
    }

    return (
        <div className="container">
            <div>
                {cartItems !== undefined && cartItems.length > 0 ?
                    (
                        <div>
                            <h3 className="cart-title">Carrito de compra</h3>
                            <ul>
                                {cartItems.map((product) => (
                                    <CartItem
                                        key={product.id}
                                        product={product}
                                    />
                                ))}
                            </ul>
                            <div className="cart-details">
                                <p>Cantidad de Productos: {cartItems.length}</p>
                                <strong>Precio total: ${Number(cartItems.reduce((amount, item) =>
                                    item.price + amount, 0
                                )).toFixed(2)}
                                </strong>
                                <br />
                                <div className="buy-btn-container">
                                    <button onClick={buy} className="buy-btn">Comprar</button>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h4>El carrito está vacio</h4>
                            <Link to="/" style={{ textDecoration: "none", margin: "20px 0" }}>
                                Visite la tienda para agregar productos
                            </Link>
                        </div>
                    )}
            </div>
        </div >
    )
}

export default Cart
