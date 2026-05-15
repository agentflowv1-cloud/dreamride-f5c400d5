import React from 'react';
import ReactDOM from 'react-dom';
import CarCard from './CarCard';
import './index.css';

const cars = [
  {
    id: 1,
    model: 'Toyota Camry',
    image: 'https://via.placeholder.com/300',
    description: 'This is a Toyota Camry',
    services: ['Service 1', 'Service 2', 'Service 3']
  },
  {
    id: 2,
    model: 'Honda Civic',
    image: 'https://via.placeholder.com/300',
    description: 'This is a Honda Civic',
    services: ['Service 1', 'Service 2', 'Service 3']
  }
];

const App = () => {
  return (
    <div className="app">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));