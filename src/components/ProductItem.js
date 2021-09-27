import React from 'react';
import PropTypes from 'prop-types';
import "../styles/product-item.scss";

const ProductItem = ({ name, photo, price, originalPrice }) => {
    return (
        <article className="card">
            <img className="card-img" src={photo} alt={name} />
            <p className="card-title">{name}</p>
            <strong className="card-price">{originalPrice != null && originalPrice > price && <p style={{ textDecoration: "line-through" }}>{Number(originalPrice).toFixed(2)}</p>} {Number(price).toFixed(2)}</strong>
            {/* <div className="card-body">
                <p className="card-title">{name}</p>
                <strong className="card-text">${Number(price).toFixed(2)}</strong>
            </div>
            <button className="card-button">Agregar al carrito</button> */}
            <button className="card-button">Agregar al carrito</button>
        </article>
    )
}

export default ProductItem;

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}