/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { returnCurrentUser } from '../services/cookie';
import { addReservation } from '../redux/xers/reservationXer';
import '../assets/App.css';

function MakeReservation({ showModal, handleClose, car }) {
  const [userName, setUsername] = useState(returnCurrentUser().username);
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const handleMakeReservation = () => {
    const data = [{
      car_id: car.id, date, city,
    }, returnCurrentUser().id];
    dispatch(addReservation(data));
    window.location.href = '/reservations';
  };

  return (
    <div>
      {' '}
      <Modal show={showModal} onHide={handleClose} size="">
        <Modal.Header closeButton className="modalheader">
          <h5>Reservation form</h5>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="reserve-form">
              <form className="modal-reserve-form">
                <input type="text" defaultValue={userName} disabled />
                <input type="text" defaultValue={car.model} disabled />
                <input type="text" placeholder="Enter City..." value={city} onChange={(e) => setCity(e.target.value)} />
                <input type="date" placeholder="Enter Date..." value={date} onChange={(e) => setDate(e.target.value)} />
              </form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-cancelreservation" onClick={handleClose}>
            Cancel
          </Button>
          <button type="submit" className="btn-bookreservation" onClick={handleMakeReservation}>Reserve</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MakeReservation;
