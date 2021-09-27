import React from 'react';
import ProductGrid from './ProductGrid';
import Header from './Header';
import "../styles/layout.scss";

const Layout = () => {
    return (
        <>
            <Header />
            <ProductGrid category="Almacén" />
        </>
    );
};

export default Layout;