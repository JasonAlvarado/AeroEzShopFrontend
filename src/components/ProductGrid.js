import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';
import "../styles/product-grid.scss"
// import { connect } from 'react-redux';

// const ProductGrid = ({products}) => {
const ProductGrid = ({ category = "Almacén" }) => {
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [visibleLoadButton, setVisibleLoadButton] = useState(true);
    const MaxPageNumber = 5;

    useEffect(() => {
        loadMoreProducts();
    }, []);

    const loadMoreProducts = () => {
        const url = `https://challenge-api.aerolab.co/products?page=${page + 1}`;

        axios.get(url)
            .then(res => {
                setProducts([...products, ...res.data.products])
            })
            .catch(console.warn);

        setPage(page + 1);
    }

    return (
        <div className="container">
            <h2 className="category-name">{category}</h2>

            <div className="card-container">
                {products && products.map((item, i) => (
                    <ProductItem
                        key={i}
                        {...item}
                    />
                ))}
            </div>

            {
                visibleLoadButton && (
                    <div className="button-container">
                        <button onClick={loadMoreProducts} className="load-button">Cargar más productos</button>
                    </div>
                )
            }
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//         products: state.shop.products
//     }
// }

// export default connect(mapStateToProps)(ProductGrid);
export default ProductGrid;
