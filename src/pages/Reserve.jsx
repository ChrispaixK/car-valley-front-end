import React from 'react';

import Users from '../users.json';
import Cars from '../cars.json';

import '../assets/App.css';
import '../assets/reserve.css';

const Reserve = () => (
  <div className="content bg-yl">
    <h3 className="reserve-title">Reservation form</h3>
    <div className="reserve-form">
      <form>
        <input type="text" value={Users[0].name} />
        <input type="text" value={Cars[1].model} />
        <input type="text" placeholder="City ..." />
        <input type="text" placeholder="Date ..." />
        <button type="submit">Reserve</button>
      </form>
    </div>
  </div>
);

export default Reserve;
