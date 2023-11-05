import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './filter.css'

const Filter = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    size: '',
    color: '',
    brand: '',
    price: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    // Nếu chọn "Tất cả size", đặt lại bộ lọc và hiển thị toàn bộ sản phẩm
    if (name === 'size' && value === 'size_default') {
      setFilters({ size: '', color: '', brand: '', price: '' });
      applyFilters({ size: '', color: '', brand: '', price: '' });
    } else {
      // Nếu chọn giá trị khác, cập nhật bộ lọc như bình thường
      setFilters({ ...filters, [name]: value });
      applyFilters({ ...filters, [name]: value });
    }
  };

  return (
    <div className="filter-container p-4 col-2">
      <div className="mb-3">
        <label htmlFor="size" className="form-label">Size:</label>
        <select className="form-select" id="size" name="size" value={filters.size} onChange={handleFilterChange}>
        <option value="">Size ...</option>
        <option value="34">34</option>
        <option value="35">35</option>
        <option value="36">36</option>
        <option value="37">37</option>
        <option value="38">38</option>
        <option value="39">39</option>
        <option value="40">40</option>
        <option value="41">41</option>
        <option value="42">42</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="color" className="form-label jus">Màu:</label>
        <select className="form-select" id="color" name="color" value={filters.color} onChange={handleFilterChange}>
          <option value="">Màu ...</option>
          <option value="Trắng">Trắng</option>
          <option value="Xanh">Xanh</option>
          <option value="Vàng">Vàng</option>
          <option value="Xám">Xám</option>
          <option value="Nâu">Nâu</option>
          <option value="Đen">Đen</option>
          <option value="Đỏ">Đỏ</option>
          <option value="Be">Be</option>
          <option value="Hồng">Hồng</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="brand" className="form-label">Thương hiệu:</label>
        <select className="form-select" id="brand" name="brand" value={filters.brand} onChange={handleFilterChange}>
        <option value="">Thương hiệu ...</option>
          <option value="ADIDAS">Adidas</option>
          <option value="Nike">Nike</option>
          <option value="Puma">Puma</option>
          <option value="MWC">MWC</option>
          <option value="PEDRO">PEDRO</option>
          <option value="MLB">MLB</option>
          <option value="CHARLES & KEITH">CHARLES & KEITH</option>
          <option value="SKECHERS">SKECHERS</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Tầm giá:</label>
        <select className="form-select" id="price" name="price" value={filters.price} onChange={handleFilterChange}>
        <option value="">Tầm giá ... </option>
          <option value="1000000">Nhỏ hơn 1.000.000đ</option>
          <option value="2500000">Nhỏ hơn 2.500.000đ</option>
          <option value="5000000">Nhỏ hơn 5.000.000đ</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
