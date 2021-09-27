import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../redux/Shopping/shopping-actions';
import "../styles/product-item.scss";

const ProductItem = ({ id, name, photo, price, originalPrice }) => {
    return (
        <article className="card">
            <img className="card-img" src={photo} alt={name} />
            <p className="card-title">{name}</p>
            <div className="prices">
                {(originalPrice != null && originalPrice > price) && <p className="originalPrice">{Number(originalPrice).toFixed(2)}</p>}
                <p className="price">{Number(price).toFixed(2)}</p>
            </div>
            <button
                onClick={() => addToCart(id)}
                className="card-button"
            >
                Agregar al carrito
            </button>
        </article >
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);

ProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}