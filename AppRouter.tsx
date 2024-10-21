import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductCategories from './pages/ProductCategories';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<ProductCategories />} />
    <Route path="/product/:id" element={<ProductDetails />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
);

export default AppRouter;
