import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext';
import alertify from "alertifyjs";
import "../styles/cart.scss";
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

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
                        <>
                            <div className="cart-grid">
                                <div>
                                    {cartItems.map((product) => (
                                        <CartItem
                                            key={product.id}
                                            product={product}
                                        />
                                    ))}
                                </div>
                                <div className="cart-details">
                                    <p>Products:{cartItems.length}</p>
                                    <strong>Total:
                                        {Number(cartItems.reduce((amount, item) =>
                                            item.price + amount, 0
                                        )).toFixed(2)
                                        }
                                    </strong>
                                    <br />
                                    <div className="buy-btn-container">
                                        <button onClick={buy} className="buy-btn">Comprar</button>
                                    </div>
                                </div>
                            </div>
                            <ul>

                            </ul>
                        </>
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
