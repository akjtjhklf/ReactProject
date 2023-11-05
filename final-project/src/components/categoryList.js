import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './category';

const CategoryList = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    console.log('Clicked category:', category);
    setSelectedCategory(category);
    onCategoryChange(category); // Gửi giá trị danh mục được chọn đến component cha
  };

  return (
    <div className='d-flex justify-content-center '>
      <Category imageSource="data:image/svg+xml;utf8,<?xml version='1.0' encoding='UTF-8' standalone='no'?><svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-house' viewBox='0 0 16 16'><path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.a5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z'/></svg>" categoryText='Tất cả' onClick={() => handleCategoryClick('')} isSelected={selectedCategory === '' }/>
      <Category imageSource="/img/category1.png" categoryText='Sneakers' value="Sneaker" onClick={() => handleCategoryClick("Sneaker")} isSelected={selectedCategory === 'Sneaker' } />
      <Category imageSource="/img/category2.png" categoryText='Giày cao gót' value="High Heel" onClick={() => handleCategoryClick('High Heel')} isSelected={selectedCategory === 'High Heel' }/>
      <Category imageSource="/img/category3.png" categoryText='Dép' value="Sandal" onClick={() => handleCategoryClick('Sandal')} isSelected={selectedCategory === 'Sandal' }/>
      <Category imageSource="/img/category4.png" categoryText='Boots' value="Boot" onClick={() => handleCategoryClick('Boot')} isSelected={selectedCategory === 'Boot' }/>
      <Category imageSource="/img/category5.png" categoryText='Giày búp bê' value="Ballet Flat" onClick={() => handleCategoryClick('Ballet Flat')} isSelected={selectedCategory === 'Ballet Flat' }/>
    </div>
  );
};
export default CategoryList;
