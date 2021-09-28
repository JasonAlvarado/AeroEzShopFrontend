import React, { useContext } from 'react'
import CartContext from '../context/cart/CartContext';

const CartItem = ({ product }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <li key={product.id} className="cart-item">
            <img src={product.photo} alt="cart-item" />
            <p>{product.name}</p>
            <p>Cantidad: 1</p>
            <p>Precio: ${Number(product.price).toFixed(2)}</p>
            <button onClick={() => { removeItem(product.id) }} className="del-button">Eliminar</button>
        </li>
    )
}

export default CartItem
