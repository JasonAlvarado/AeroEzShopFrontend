import React from 'react';
import PropTypes from 'prop-types';
import "../styles/product-item.scss";

const ProductItem = ({ name, photo, price, originalPrice }) => {
    return (
        <article className="card">
            <img className="card-img" src={photo} alt={name} />
            <p className="card-title">{name}</p>
            {originalPrice != null && originalPrice > price && <p className="originalPrice">{Number(originalPrice).toFixed(2)}</p>}
            <p className="price">{Number(price).toFixed(2)}</p>
            <button className="card-button">Agregar al carrito</button>
        </article >
    )
}

export default ProductItem;

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}