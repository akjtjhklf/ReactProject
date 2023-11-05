
import React from 'react';
import './arrowComponents.css'

const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick}></div>;
};

const NextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick}></div>;
};

export { PrevArrow, NextArrow };
