import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { returnCurrentUser } from '../services/cookie';
import { fetchCars } from '../redux/xers/carXer';
import { addReservation } from '../redux/xers/reservationXer';
import '../assets/App.css';
import '../assets/reserve.css';

const Reserve = () => {
  const cars = useSelector((state) => state.cars);
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [car, setCar] = useState('');
  const [errMsg, setErrMsg] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    setErrMsg('');
  }, [city, date, car])

  const handleMakeReservation = (e) => {
    e.preventDefault();
    const data = [{
      car_id: car, date, city,
    }, returnCurrentUser().id];
    if (city === '' || date === '' || car === '') {
      setErrMsg('All fields are required');
      return;
    }
    dispatch(addReservation(data));
    window.location.href = '/reservations';
  };

  return (
    <div className="content">
      <h3 className="reserve-title">Reservation form</h3>
      <div className="reserve-form">
        <form className="form">
          <div className="input-container">
            {' '}
            <input type="text" placeholder="Enter Your Username..." value={returnCurrentUser().username} disabled />
          </div>
          <div className="input-container">
            <select className="select-input" onChange={(e) => setCar(e.target.value)}>
              <option value=""> Select modal</option>
              {cars.map((car) => <option value={car.id} key={car.id}>{car.model}</option>)}
            </select>
          </div>
          <div className="input-container">
            <input type="text" placeholder="Enter City..." onChange={(e) => setCity(e.target.value)} value={city} />
          </div>
          <div className="input-container">
            {' '}
            <input type="date" placeholder="Enter Date..." onChange={(e) => setDate(e.target.value)} value={date} />
          </div>
          <div className="btn-reserve-container ">
            <button type="submit" onClick={handleMakeReservation}>Reserve</button>
          </div>
        </form>
        {
          errMsg && <p className="error" aria-live="assertive">{errMsg}</p>
        }
      </div>
    </div>
  );
};

export default Reserve;
