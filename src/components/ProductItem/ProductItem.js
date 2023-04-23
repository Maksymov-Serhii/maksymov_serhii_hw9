import React from "react";
import './ProductItem.css'
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../Menu/Menu";
import car1 from "../../assets/images/car-1.jpg"
import car2 from "../../assets/images/car-2.jpg"
import car3 from "../../assets/images/car-3.jpg"
import car4 from "../../assets/images/car-4.jpg"
import car5 from "../../assets/images/car-5.jpg"

const ProductItem = () => {
  const { productId } = useParams();
  const productImages = {
    1: car1,
    2: car2,
    3: car3,
    4: car4,
    5: car5,
  }
  const navigate = useNavigate();

  const previousProductHandle = () => {
    if (productId > 1) {
      navigate(`/products/${productId - 1}`);
    }
  
  }
  const nextProductHandle = () => {
    if (productId < 5) {
      navigate(`/products/${+productId + 1}`);
    }
  }

  return (
    <div className="product-page">
      <Menu />
      <div className="product-navigation">
        <button className="button" onClick={previousProductHandle}>Попередній товар</button>
        <h4>Товар {productId}</h4>
        <button className="button" onClick={nextProductHandle}>Наступний товар</button>
      </div>
      <img src={productImages[productId]} alt={productId}></img>
    </div>
  )
}

export default ProductItem;
