import React from 'react';
import Car from '../cars.json';
import '../assets/carDetails.css';

const CarDetails = () => (
  <div className="content">
    <div className="car-details">
      <div className="car-img">
        <img src={Car[0].image} alt={Car[0].model} />
      </div>
      <div className="car-description">
        <div className="descr-top">
          <h4>{Car[0].model}</h4>
          <p>{Car[1].brand}</p>
        </div>
        <div className="descr-btm">
          <p>
            Color :
            {' '}
            {Car[0].color}
          </p>
          <p>
            Year of Production :
            {' '}
            {Car[0]['release-date']}
          </p>
          <p>
            Origin country :
            {' '}
            {Car[0].country}
          </p>
          <p>

            Top Speed :
            {' '}
            {Car[0].speed}
          </p>
          <p>
            Price :
            {' '}
            {Car[0].price}
          </p>
        </div>
      </div>
    </div>
    <button className="reserve" type="button">Reserve</button>
  </div>
);

export default CarDetails;
