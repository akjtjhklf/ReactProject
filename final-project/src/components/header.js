import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import {Link} from "react-router-dom";

const Header = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredProducts = products.filter(product => {
      // Kiểm tra xem thông tin tìm kiếm có trùng với bất kỳ trường nào trong sản phẩm hay không
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      return (
        product.name.toLowerCase().includes(lowercasedSearchTerm) ||
        (product.price.toString().includes(searchTerm) && searchTerm.trim() !== '') ||
        product.brand.toLowerCase().includes(lowercasedSearchTerm)
      );
    });
    onSearch(filteredProducts);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="header text-left">
      <Link to="/"><img src='/img/LOGO.png' alt='LOGO'/></Link>
      <div className="search-bar d-flex justify-content-center">
        <input className='input-header'
          type="text"
          placeholder="Tìm sản phẩm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className='button-header' onClick={handleSearch}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg></button>
      </div>
    </div>
  );
};

export default Header;
