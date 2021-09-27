import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';
import "../styles/product-grid.scss"
// import useGetProducts from '../api/useGetProducts';

const ProductGrid = ({ category = "Almacén" }) => {
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);
    const MaxPageNumber = 5;

    useEffect(() => {
        loadMoreProducts();
    }, []);

    const loadMoreProducts = () => {
        // const url = `http://ezshop.us-east-1.elasticbeanstalk.com/api/product?page=${page + 1}`;
        const url = `https://challenge-api.aerolab.co/products?page=${page + 1}`;

        axios.get(url)
            .then(res => {
                console.log(res.data);
                // setProducts([...products, ...res.data]) para url de aws
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
                page !== MaxPageNumber && (
                    <div className="button-container">
                        <button onClick={loadMoreProducts} className="load-button">Cargar más productos</button>
                    </div>
                )
            }
        </div>
    )
}

export default ProductGrid

