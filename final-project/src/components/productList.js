import React, { useEffect, useState } from 'react';
import Product from './product';
import './productList.css';

const ProductList = ({ products, filters, selectedCategory }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    // Lọc sản phẩm dựa trên giá trị của filters và selectedCategory khi chúng thay đổi
    const updatedProducts = products.filter(product => {
      const sizeMatch = filters.size ? product.size.includes(filters.size) : true;
      const colorMatch = filters.color ? product.color.includes(filters.color) : true;
      const brandMatch = filters.brand ? product.brand.includes(filters.brand) : true;
      const priceMatch = parseInt(filters.price.replace(/\./g, ''), 10) ? parseInt(product.price.replace(/\./g, ''), 10) <= parseInt(filters.price.replace(/\./g, ''), 10) : true;
      const categoryMatch = selectedCategory ? product.shoesstyle === selectedCategory : true;
      return sizeMatch && colorMatch && brandMatch && categoryMatch && priceMatch;
    });
    setFilteredProducts(updatedProducts); // Cập nhật danh sách sản phẩm đã lọc
  }, [products, filters, selectedCategory]);

  
  return (
    <div className="product-list col-10">
      <div className="products-container">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
