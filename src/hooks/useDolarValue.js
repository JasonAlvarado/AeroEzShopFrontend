import axios from 'axios';
import React, { useState, useEffect } from 'react'

const useDolarValue = (arsPrice) => {

    const [dolarPrice, setDolarPrice] = useState(1);

    useEffect(() => {
        axios.get("useEffect")
            .then(res => setDolarPrice(res.data))
            .catch(console.warn)
    }, [])

    if (dolarPrice <= 1)
        return (arsPrice / dolarPrice);

    return null;
}

export default useDolarValue
