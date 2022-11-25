import React from 'react';
import Cars from '../cars.json';
import '../assets/App.css';

const DeleteCar = () => (
  <div className="content">
    <h2>Reservations page</h2>
    <div className="reserved-cars">
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={Cars[0].image} alt={Cars[0].id} />
        </div>
        <p>{Cars[0].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={Cars[1].image} alt={Cars[1].id} />
        </div>
        <p>{Cars[1].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={Cars[2].image} alt={Cars[2].id} />
        </div>
        <p>{Cars[2].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={Cars[0].image} alt={Cars[0].id} />
        </div>
        <p>{Cars[0].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={Cars[1].image} alt={Cars[1].id} />
        </div>
        <p>{Cars[1].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
      <div className="r-car">
        <div className="img-container">
          <span className="dot" />
          <img src={Cars[2].image} alt={Cars[2].id} />
        </div>
        <p>{Cars[2].model}</p>
        <button type="button" className="button-delete">Delete</button>
      </div>
    </div>
  </div>
);

export default DeleteCar;
