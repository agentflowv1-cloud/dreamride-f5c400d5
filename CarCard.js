import React from 'react';
import './CarCard.css';

const CarCard = ({ car }) => {
  return (
    <div className="card">
      <img src={car.image} alt={car.model} />
      <div className="card-content">
        <h2 className="card-title">{car.model}</h2>
        <p className="card-description">{car.description}</p>
        <ul className="card-services">
          {car.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CarCard;