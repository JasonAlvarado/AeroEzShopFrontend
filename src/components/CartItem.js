import React from 'react'

const CartItem = ({ product }) => {
    return (
        <li key={product.id} className="cart-item">
            <img src={product.photo} alt="cart-item" />
            <p>{product.name}</p>
            <p>Cantidad: 1</p>
            <p>{Number(product.price).toFixed(2)}</p>
            <p>total: {Number(1 * product.price).toFixed(2)}</p>
        </li>
    )
}

export default CartItem
