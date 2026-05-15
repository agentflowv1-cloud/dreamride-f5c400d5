import React from 'react';
import './DreamRide.css';

function DreamRide() {
  return (
    <div className='max-w-md mx-auto p-4 md:p-6 lg:p-8 mb-24'>
      <h1 className='text-3xl font-bold mb-4'>DreamRide</h1>
      <p className='text-lg mb-6'>Experience the ultimate ride</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Book Now</button>
    </div>
  );
}

export default DreamRide;