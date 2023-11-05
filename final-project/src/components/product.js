import React, { useState } from 'react';
import Modal from './modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './product.css';

const Product = ({ product }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="card product col-3">
      <img className='card-img-top' src={product.img} alt={product.name} />
      <h5 className='Name'>{product.name}</h5>
      <p className='Brand'>{product.brand}</p>
      <p className='Price'>{product.price}đ</p>
      <button className="Buy_Item" onClick={toggleModal}>Xem sản phẩm</button>
      {isModalOpen ? (
        <Modal product={product} onClose={toggleModal} />
      ) : null}
    </div>
  );
};

export default Product;
