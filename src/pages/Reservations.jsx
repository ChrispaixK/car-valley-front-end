import React from 'react';
import { useSelector } from 'react-redux';

import '../assets/App.css';
import '../assets/reservations.css';

const Reservations = () => {
  const cars = useSelector((state) => state.cars)

  return (
  <div className="content">
    <h2>Reservations page</h2>
    {cars.map((car) => (
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
)};

export default Reservations;
