import React from 'react';

import '../assets/App.css';
import '../assets/reserve.css';

const Reserve = () => (
  <div className="content bg-yl">
    <h3 className="reserve-title">Reservation form</h3>
    <div className="reserve-form">
      <form>
        <input type="text" placeholder="Enter Your Username..." />
        <input type="text" placeholder="Enter the Car Model..." />
        <input type="text" placeholder="Enter City..." />
        <input type="text" placeholder="Enter Date..." />
        <button type="submit">Reserve</button>
      </form>
    </div>
  </div>
);

export default Reserve;
