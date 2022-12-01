import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars, deleteCar } from '../redux/xers/carXer';
import '../assets/App.css';

const DeleteCar = () => {
  const cars = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCar(id));
    window.location.reload();
  };

  return (
    <div className="content">
      <h2>Delete page</h2>
      <div className="reserved-cars">
        {cars.map((car) => (
          <div className="r-car" key={car.id}>
            <div className="img-container">
              <span className="dot" />
              <img src={car.image} alt={car.id} />
            </div>
            <p>{car.model}</p>
            <button type="button" className="button-delete" onClick={() => handleDelete(car.id)}>Delete</button>
          </div>
        ))}

      </div>
    </div>
  );
};

export default DeleteCar;
