import React from 'react';

import Cars from '../cars.json';

import '../assets/App.css';
import '../assets/reservations.css';

const Reservations = () => (
  <div className="content">
    <h2>Reservations page</h2>
    {Cars.map((car) => (
      <div className="reserved-cars" key={car.id}>
        <div className="r-car">
          <div className="img-container">
            <span className="dot" />
            <img src={car.image} alt={car.id} />
          </div>
          <p>{car.model}</p>
          <p>City</p>
          <p>Date</p>
        </div>
      </div>
    ))}
  </div>
);

export default Reservations;
