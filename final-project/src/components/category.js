import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './category.css';

const Category = ({ imageSource, categoryText, onClick, isSelected }) => {
  return (
        <div className="text-center mx-5 my-4">
          <button className={`category-item-button  ${isSelected ? 'selected-category' : ''}`} onClick={onClick}>
            <img src={imageSource} alt={categoryText} className="img-fluid" />
          </button>
          <p>{categoryText}</p>
        </div>
  );
};

export default Category;