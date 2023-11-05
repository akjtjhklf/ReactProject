import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './modal.css';
import Form from './form';

const Modal = ({ product, onClose }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFormVisible, setFormVisible] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  const handleOrderClick = () => {
    if (selectedSize) {
      setFormVisible(true);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <div>
    <div className="modal-container container">
      <div className="row pt-4 pb-4">
        <div className="col-md-5">
          <img className="card-img-top" src={product.img} alt={product.name} /> 
        </div>
        <div className="col-md-7">
            <p className="text-left mt-3" style={{color: 'green', font_weight: 'bold'}}>NEW</p>
            <h2 className="text-left text-capitalize">{product.name}</h2>
            <p className="text-left Price">Giá: {product.price}đ</p>
            <div className="d-flex justify-content-left size_info">
              {product.size.map((size, index) => (
              <button className={`mr-3 mb-3 size_but ${selectedSize === size ? 'selected-size' : ''}`} key={index}onClick={() => handleSizeClick(size)}>
              {size}
      </button>
    ))}
  </div> 
  <p className="text-left mt-3">
            Số lượng:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              className="ml-2 input_quantity"
            />
          </p>
            <h3 className="text-left">Mô tả sản phẩm:</h3>
            <p className="text-left detail_content">{product.detail}</p> 
            <div className="d-flex justify-content-evenly">
              <button onClick={onClose} className="btn text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart-x mr-3" viewBox="0 0 16 16"><path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793 7.354 5.646z"/><path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg> Trở Về</button>
                <button className="btn text-center" selid="38415619" psid="38415619" title="Vui lòng chọn kích cỡ!" ck="0" onClick={handleOrderClick}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart3 mr-3" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg> Đặt Hàng Ngay</button>
            </div>
        </div>
      </div>
      {showAlert && (
            <div className='alert-box-modal'>
              <p className="py-1">Vui lòng chọn size trước khi tiếp tục!</p>
            </div>
      )}
    </div>
    {isFormVisible && <Form product={{ ...product, quantity }} onClose={() => setFormVisible(false)} />}
    </div>        
  );
};

export default Modal;
