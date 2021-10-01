import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext';
import "../../styles/cart-item.scss";

const CartItem = ({ product }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <li key={product.id} className="cart-item">
            <img src={product.photo} alt="cart-item" />
            <div className="info">
                <h5>{product.name}</h5>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${Number(product.price).toFixed(2)}</p>
                <p>Total: ${Number(product.price * product.quantity).toFixed(2)}</p>
            </div>
            <button onClick={() => { removeItem(product.id) }} className="delete-button">Eliminar</button>
        </li>
    )
}

export default CartItem
