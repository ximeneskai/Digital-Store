import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produtos" element={<ProductListingPage />} />
        <Route path="/product/:id" element={<ProductViewPage />} />
      </Routes>
    </Router>
  );
}

export default App;