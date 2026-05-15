import React from 'react';
import ReactDOM from 'react-dom';
import CarDetailsPage from './CarDetailsPage';

const car = {
  name: 'Toyota Camry',
  image: 'https://example.com/car-image.jpg',
  description: 'This is a high-quality car.',
  services: [
    'Oil change',
    'Tire rotation',
    'Brake replacement'
  ]
};

ReactDOM.render(
  <React.StrictMode>
    <CarDetailsPage car={car} />
  </React.StrictMode>,
  document.getElementById('root')
);