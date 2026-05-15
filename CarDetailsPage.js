import React from 'react';
import './CarDetailsPage.css';

function CarDetailsPage({ car }) {
  return (
    <div className='max-w-5xl mx-auto p-4 md:p-6 lg:p-8 mb-8">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className='image-container">
          <img src={car.image} alt={car.name} className='object-cover h-64 w-full'/>
        </div>
        <div className='car-details">
          <h2 className='text-2xl font-bold mb-2'>{car.name}</h2>
          <p className='text-lg'>{car.description}</p>
          <h3 className='text-xl font-bold mt-4 mb-2'>Available Services:</h3>
          <ul>
            {car.services.map((service, index) => (
              <li key={index} className='text-lg'>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CarDetailsPage;