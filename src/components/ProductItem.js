import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/cart/CartContext';
import "../styles/product-item.scss";

const ProductItem = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <article className="card">
            <img className="card-img" src={product.photo} alt={product.name} />
            <p className="card-title">{product.name}</p>
            <div className="prices">
                {(product.originalPrice != null && product.originalPrice > product.price) && <p className="originalPrice">{Number(product.originalPrice).toFixed(2)}</p>}
                <p className="price">{Number(product.price).toFixed(2)}</p>
            </div>
            <button
                onClick={() => { addToCart(product) }}
                className="card-button"
            >
                Agregar al carrito
            </button>
        </article >
    )
}

export default ProductItem;

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}