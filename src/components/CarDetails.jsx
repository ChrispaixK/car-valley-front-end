import React, { useEffect } from 'react';
import '../assets/carDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../redux/xers/carXer';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const { carId }  = useParams();
  const carIndex = carId -1;
  return (
  <div className="content">
    <div className="car-details">
      <div className="car-img">
        <img src={cars[carIndex].image} alt={cars[carIndex].model} />
      </div>
      <div className="car-description">
        <div className="descr-top">
          <h4>{cars[carIndex].model}</h4>
          <p>{cars[carIndex].brand}</p>
        </div>
        <div className="descr-btm">
          <p>
            Color :
            {' '}
            {cars[carIndex].color}
          </p>
          <p>
            Year of Production :
            {' '}
            {cars[carIndex].release_date}
          </p>
          <p>
            Origin country :
            {' '}
            No country
          </p>
          <p>

            Top Speed :
            {' '}
            No speed 
          </p>
          <p>
            Price :
            {' '}
            {cars[carIndex].price}
          </p>
        </div>
      </div>
    </div>
    <button className="reserve" type="button">Reserve</button>
  </div>
  )
  };

export default CarDetails;
