import React, { useState } from 'react'
import axios from 'axios';

const useGetProducts = (page) => {
    const url = `https://challenge-api.aerolab.co/products?page=${page}`

    const [products, setProducts] = useState([]);

    axios.get(url)
        .then(res => setProducts(res.data.products))
        .catch(console.warn);

    return products;
}

export default useGetProducts
