import React, { useState }  from 'react';
import './productPage.css';
import ProductList from '../components/productList';
import Filter from '../components/filter';
import CategoryList from '../components/categoryList';
import productsData from '../data.json';
import Header from '../components/header';
import Modal from '../components/modal';
import Footer from '../components/footer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const [filters, setFilters] = useState({
    size: '', // Thêm các thuộc tính khác của filters nếu cần
    color: '',
    brand: '',
    price: '',
    shoesstyle: '',
  });

  // Hàm để cập nhật giá trị của filters
  const updateFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  const [selectedCategory, setSelectedCategory] = useState(''); // State để theo dõi danh mục được chọn

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true); // Khi sản phẩm được chọn, hiển thị modal
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setModalOpen(false); // Khi đóng modal, ẩn modal và hiển thị lại filter và productList
  };

  return (
    <div>
      <Header products={productsData} onSearch={handleSearch} />
      <CategoryList onCategoryChange={handleCategoryChange}/>
      <div className="row">
        <Filter applyFilters={updateFilters} />
        {isModalOpen ? null : <ProductList products={filteredProducts} filters={filters} selectedCategory={selectedCategory} onProductClick={handleProductClick} />}
      </div>
      {isModalOpen && <Modal product={selectedProduct} onClose={handleCloseModal} />} {/* Hiển thị modal khi isModalOpen là true */}
      <Footer/>
    </div>
  );
}

export default ProductPage;