import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext';
import "../styles/cart.scss";

const CartItem = ({ product }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <li key={product.id} className="cart-item">
            <img src={product.photo} alt="cart-item" />
            <div>
                <p>{product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${Number(product.price * product.quantity).toFixed(2)}({product.quantity} x {Number(product.price).toFixed(2)})</p>
                {/* <button onClick={() => { decreaseQuantity(product.id) }} className="quantity-button">-1</button> */}
                <button onClick={() => { removeItem(product.id) }} className="del-button">Eliminar producto</button>
                {/* <button onClick={() => { increaseQuantity(product.id) }} className="quantity-button">+1</button> */}
            </div>
        </li>
    )
}

export default CartItem
