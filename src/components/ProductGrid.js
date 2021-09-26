import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem';
// import "../styles/product-grid.css"

const ProductGrid = ({category}) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products")//https://challenge-api.aerolab.co/products
            .then(res => {
                setProducts(res.data)
            })
            .catch(console.warn);
    }, [])

    return (
        <div className="card-container">
            
            {products && products.map((item, i) => (
                <ProductItem
                    key={i}
                    {...item}
                />
            ))}

            <div style={{ textAlign: "center" }}>
                <button className="load-button">Cargar más productos</button>
            </div>
        </div>
    )
}

export default ProductGrid

