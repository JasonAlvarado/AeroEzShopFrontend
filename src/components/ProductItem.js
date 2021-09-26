import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
// import "../styles/product-item.css";

const ProductItem = ({ name, photo, price }) => {
    return (
        <article className="card">
            <img className="card-img" src={photo} alt={name} />
            <p className="card-title">{name}</p>
            <p className="card-price">{Number(price).toFixed(2)}</p>
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