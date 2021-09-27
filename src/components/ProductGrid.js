import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';
import "../styles/product-grid.scss"
import useGetProducts from '../api/useGetProducts';

const ProductGrid = ({ category }) => {
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadMoreProducts();
    }, []);

    const loadMoreProducts = () => {
        // setPage(page + 1);
        // const newProducts = useGetProducts(page);
        // setProducts([...products, ...newProducts]);
        axios.get(`https://challenge-api.aerolab.co/products?page${page}`)//https://challenge-api.aerolab.co/products
            .then(res => {
                console.log(res.data.products);
                setProducts([...products, ...res.data.products])
            })
            .catch(console.warn);
    }

    // const maxPageNumber = 5;

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

                {/* {page === maxPageNumber ?
                    (<p>No hay mas productos</p>) :
                    <div style={{ textAlign: "center" }}>
                        <button onClick={loadMoreProducts} className="load-button">Cargar más productos</button>
                    </div>} */}
                <div style={{ textAlign: "center" }}>
                    <button onClick={loadMoreProducts} className="load-button">Cargar más productos</button>
                </div>
            </div>
        </div>
    )
}

export default ProductGrid

