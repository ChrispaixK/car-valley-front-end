import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/App.css';

const DeleteCar = () => {
  const cars = useSelector((state) => state.cars);

  return (
  <div className="content">
    <h2>Delete page</h2>
    <div className="reserved-cars">
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={cars[0].image} alt={cars[0].id} />
        </div>
        <p>{cars[0].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={cars[1].image} alt={cars[1].id} />
        </div>
        <p>{cars[1].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={cars[2].image} alt={cars[2].id} />
        </div>
        <p>{cars[2].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={cars[0].image} alt={cars[0].id} />
        </div>
        <p>{cars[0].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={cars[1].image} alt={cars[1].id} />
        </div>
        <p>{cars[1].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={cars[2].image} alt={cars[2].id} />
        </div>
        <p>{cars[2].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
    </div>
  </div>
)};

export default DeleteCar;
