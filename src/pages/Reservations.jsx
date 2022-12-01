import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservations } from '../redux/xers/reservationXer';
import { returnCurrentUser } from '../services/cookie';

import '../assets/App.css';
import '../assets/reservations.css';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchReservations(returnCurrentUser().id)); }, [dispatch]);
  return (
    <div className="content">
      <h2>Reservations page</h2>
      {reservations?.map((res) => (
        <div className="reserved-cars" key={res.id}>
          <div className="r-car">
            <div className="img-container">
              <span className="dot" />
              <img src={res.car?.image} alt={res.car?.id} />
            </div>
            <p>{res.model}</p>
            <p>{res.city}</p>
            <p>{res.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reservations;
