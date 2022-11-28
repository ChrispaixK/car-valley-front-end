import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/App.css';
import '../assets/cars.css';

const Home = () => {
  const cars = useSelector((state) => state.cars);

  return (
  <div className="content">
    <div className="cars">
      {cars.map((car) => (
        <div className="car-container" key={car.id}>
          <div className="car-image">
            <span className="dot" />
            <img src={car.image} alt={car.model} />
          </div>
          <h4>{car.model}</h4>
          <p>
            {car.description}
            {' '}
            {car.color}
            {' '}
            {car.price}
            {' '}
            {car.release_date}
          </p>
        </div>
      ))}
    </div>
  </div>
)};

export default Home;
