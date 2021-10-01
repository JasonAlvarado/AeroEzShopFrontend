import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';
import "../../styles/product-grid.scss"

const ProductGrid = ({ category = "Almacén" }) => {
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadMoreProducts();
    }, []);

    const loadMoreProducts = () => {
        const BASE_URL = "https://challenge-api.aerolab.co";
        const getProductsEndpoint = `/products?page=${page + 1}`;
        const url = `${BASE_URL}${getProductsEndpoint}`;

        axios.get(url)
            .then(res => setProducts([...products, ...res.data.products]))
            .catch(console.warn);

        setPage(page + 1);
    }

    return (
        <div className="container">
            <h2 className="category-name">{category}</h2>

            <div className="card-container">
                {products && products.map((item) => (
                    <ProductItem
                        key={item.id}
                        product={item}
                    />
                ))}
            </div>

            <div className="button-container">
                <button onClick={loadMoreProducts} className="load-button">Cargar más productos</button>
            </div>
        </div>
    )
}

export default ProductGrid;
