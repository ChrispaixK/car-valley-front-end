import React from 'react';
import '../assets/App.css';
import '../assets/addcar.css';

const AddCar = () => (
  <div className="content">
    <div className="add-car">
      <div className="add-form">
        <h2>Add a car</h2>
        <form>
          <input type="text" placeholder="Brand ..." />
          <input type="text" placeholder="Model ..." />
          <input type="text" placeholder="Year ..." />
          <button type="submit">Add car</button>
        </form>
      </div>
      <div className="form-aside">
        <img src="https://i.postimg.cc/y81zX370/car-photo-311956-removebg-preview.png" alt="aside" />
      </div>
    </div>
  </div>
);

export default AddCar;
