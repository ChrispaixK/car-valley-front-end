import React from 'react';
import '../assets/App.css';
import '../assets/cars.css';
import Cars from '../cars.json';

const Home = () => (
  <div className="content">
    <div className="cars">
      {Cars.map((car) => (
        <div className="car-container" key={car.id}>
          <div className="car-image">
            <span className="dot" />
            <img src={car.image} alt={car.model} />
          </div>
          <h4>{car.model}</h4>
          <p>{car.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
