import React from "react";
import './MainPage.css'
import Menu from "../Menu/Menu";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const startShoppingHandle = () => {
    navigate('/products');
  }

  return (
    <div className="main-page">
      <Menu />
      <p>
        <button className="button" onClick={startShoppingHandle}>Розпочати покупки</button>
      </p>
    </div>
  )
}

export default MainPage;
