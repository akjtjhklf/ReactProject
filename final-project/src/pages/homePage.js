import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { PrevArrow, NextArrow } from '../components/arrowComponents'
import './homePage.css'
import productsData from '../data.json';
import {Link} from "react-router-dom";

// import detailShop from './detail.json'

const HomePage = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 20000,
    prevArrow: <PrevArrow />, // Sử dụng component cho nút trái
    nextArrow: <NextArrow />, // Sử dụng component cho nút phải
  };

  function getRandomProducts(products, numberOfProducts) {
    const shuffledProducts = products.sort(() => 0.5 - Math.random());
    return shuffledProducts.slice(0, numberOfProducts);
  }
  
  const randomProducts = getRandomProducts(productsData, 15);

  return (
    <div className="homepage">
      <div className="slider-container">
        <div className="header_home text-left d-flex">
          <img className="mr-4" src='/img/LOGO.png' alt='LOGO'/>
          <Link to="/" className="navi">Trang Chủ</Link>
          <Link to="/product" className="navi">Sản Phẩm</Link>
        </div>
        <Slider {...sliderSettings}>
            <img className="slide_img" src="img/home_slide1.png" alt="Slide 1" />
            <img className="slide_img" src="img/home_slide2.png" alt="Slide 2" />
            <img className="slide_img" src="img/home_slide3.png" alt="Slide 3" />
        </Slider>
      </div>
      <div className='DetailShop'>
          
      </div>
      <div className="shoe-grid row">
        {randomProducts.map((product) => (
          <div className="shoe-item col-4" key={product.id}>
            <img className="item_img" src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="pricehome">{product.price}đ</p>
          </div>
        ))}
      </div>
      <div className="mb-5">
        <button className="see-more" >
          <Link to="/product" className="navi">Xem Tất Cả Sản Phẩm</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;