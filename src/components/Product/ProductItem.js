import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../../context/cart/CartContext';
import "../../styles/product-item.scss";

const ProductItem = ({ product }) => {
    const [prodQuantity, setProdQuantity] = useState(0);
    const { addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <article className="card">
            <img src={product.photo} alt={product.name} />
            <p className="card-title">{product.name}</p>
            <p className="price"></p>
            {/* <div className="prices">
                {(product.originalPrice != null && product.originalPrice > product.price) && (
                    <p className="originalPrice">{Number(product.originalPrice).toFixed(2)}</p>
                )}
                <p className="currentPrice">{Number(product.price).toFixed(2)}</p>
            </div> */}
            {
                prodQuantity === 0 ? (
                    <button
                        onClick={() => {
                            addToCart({ ...product, quantity: prodQuantity + 1 });
                            setProdQuantity(prodQuantity + 1);
                        }}
                        className="add-button"
                    >
                        Agregar al carrito
                    </button>
                ) : (
                    <div className="quantity-info">
                        <button
                            onClick={() => {
                                if (prodQuantity >= 1) {
                                    setProdQuantity(prodQuantity - 1)
                                    decreaseQuantity(product.id)
                                }
                            }}
                            className="quantity-button"
                        >
                            -
                        </button>
                        <span>{prodQuantity}</span>
                        <button
                            onClick={() => {
                                setProdQuantity(prodQuantity + 1)
                                increaseQuantity(product.id)
                            }}
                            className="quantity-button"
                        >
                            +
                        </button>
                    </div>
                )
            }
        </article >
    )
}

export default ProductItem;

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}