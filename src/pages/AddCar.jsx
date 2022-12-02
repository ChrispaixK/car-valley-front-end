import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../redux/xers/carXer';
import '../assets/App.css';
import '../assets/addcar.css';

function AddCar() {
  const [model, setModel] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('model', model);
    formData.append('release_date', releaseDate);
    formData.append('color', color);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('image', image);
    

    dispatch(addCar(formData));
    window.location = '/';
  };

  const onImageChange = (e) => {
    setImage({ image: e.target.files[0] });
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
             type="file"
             multiple={false}
             placeholder="Import image"
             onChange={onImageChange}
            />
            <input
              type="number"
              placeholder="Price ..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Add car</button>
          </form>
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
