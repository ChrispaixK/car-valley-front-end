import React, { useEffect, useState } from 'react';
import '../assets/carDetails.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCars } from '../redux/xers/carXer';
import MakeReservation from './MakeReservation';

const CarDetails = () => {
  const cars = useSelector((state) => state.cars);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const handleHideModal = () => setShowModal(false);
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const { carId } = useParams();

  const car = cars.filter((c) => c.id === Number(carId));
  return (
    <div className="content">
      <div className="car-details">
        <div className="car-img">
          <img src={car[0].image} alt={car.model} />
        </div>
        <div className="car-description">
          <div className="descr-top">
            <h4>{car[0].model}</h4>
            <p>{car[0].brand}</p>
          </div>
          <div className="descr-btm">
            <p>
              Color :
              {' '}
              {car[0].color}
            </p>
            <p>
              Year of Production :
              {' '}
              {car[0].release_date}
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
              {car[0].price}
            </p>
          </div>
        </div>
      </div>
      <button
        className="reserve"
        type="button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Reserve

      </button>
      <MakeReservation showModal={showModal} handleClose={handleHideModal} car={car[0]} />
    </div>
  );
};

export default CarDetails;
