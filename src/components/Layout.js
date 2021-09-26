import React from 'react';
import ProductGrid from './ProductGrid';
import Header from './Header';
import "../styles/layout.css";

const Layout = () => {
    return (
        <div className="container">
            <Header />
            <ProductGrid category="Almacen" />
        </div>
    );
};

export default Layout;