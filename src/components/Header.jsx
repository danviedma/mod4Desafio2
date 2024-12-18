import React from 'react';
import fondoHeader from '../assets/img/Header.jpg';
import '../assets/css/Header.css';

const Header = () => {
  return (
    <div className="image-container">
    <img src={fondoHeader} alt="Fondo Header" className="background-image" />
    <div className="overlay">
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
  </div>
  );
}

export default Header;