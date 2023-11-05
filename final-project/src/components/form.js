import React, { useState, useEffect } from 'react';
import './form.css'; // Import CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({ product, onClose }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        onClose();
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert],[onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo({ ...customerInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn việc gửi form mặc định
    setShowAlert(true);
};

  return (
    <div className="form-container">
      <h2>Thông Tin Đặt Hàng</h2>
      <div className="text-left">
        <label htmlFor="name">Tên sản phẩm:</label>
        <p className="text-left form-control">{product.name}</p>
        <label htmlFor="name">Giá của sản phẩm:</label>
        <p className="text-left form-control">{product.price}đ</p>
        <label htmlFor="name">Số lượng sản phẩm:</label>
        <p className="text-left form-control">{product.quantity}</p>
        <label htmlFor="name">Tổng tiền:</label>
        <p className="text-left form-control">{(parseInt(product.price.replace(/\./g, ''), 10) * product.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 text-left">
          <label htmlFor="name">Họ Tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customerInfo.name}
            onChange={handleInputChange}
            required
            class="form-control text-left"
          />
        </div>
        <div className="mb-3 text-left">
          <label htmlFor="phone" className="form-label text-left">Số Điện Thoại:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={customerInfo.phone}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3 text-left">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={customerInfo.email}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3 text-left">
          <label htmlFor="address">Địa Chỉ:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={customerInfo.address}
            onChange={handleInputChange}
            required
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-evenly">
            <button className="Cancel" onClick={onClose}>Huỷ</button>
            <button type="submit" className="Buy" onSubmit={handleSubmit}>Xác Nhận Đặt Hàng</button>
        </div>
        </form>
        {showAlert && (
            <div className='alert-box'>
              <p className="py-2">Đặt hàng thành công!<br />Chúng tôi sẽ liên hệ đến bạn khi đơn hàng chuẩn bị được gửi!</p>
            </div>
      )}
    </div>
  );
};

export default Form;
