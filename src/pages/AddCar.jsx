import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/xers/carXer';
import '../assets/App.css';
import '../assets/addcar.css';
import { useEffect } from 'react';

function AddCar() {
  const [model, setModel] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [errMsg, setErrMsg] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setErrMsg('');
  }, [model, color, image, price, description, releaseDate])

  const handleSubmit = (e) => {
    e.preventDefault();
    setModel('');
    setReleaseDate('');
    setColor('');
    setPrice('');

    const newCar = {
      model,
      color,
      image,
      price,
      description,
      release_date: releaseDate,
    };
    if (model === '' || releaseDate === '' || color === '' || price === '' || description === '' || image === '') {
      setErrMsg('All fields are required');
      return;
    }
    dispatch(addCar(newCar));
    window.location = '/';
  };
  return (
    <div className="content">
      <div className="add-car">
        <div className="add-form">
          <h2>Add a car</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Model ..."
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <input
              type="date"
              placeholder="Release date ..."
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="Color ..."
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <input
              type="text"
              placeholder="Short description ..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Image link ..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price ..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add car</button>
          </form>
          {
            errMsg && <p className="error" aria-live="assertive">{errMsg}</p>
          }
        </div>
        <div className="form-aside">
          <img
            src="https://i.postimg.cc/y81zX370/car-photo-311956-removebg-preview.png"
            alt="aside"
          />
        </div>
      </div>
    </div>
  );
}

export default AddCar;
