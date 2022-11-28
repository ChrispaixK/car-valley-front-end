import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import carXer from './xers/carXer';
import reservationXer from './xers/reservationXer';

const store = configureStore({
  reducer: {
    cars: carXer,
    reservations: reservationXer,
  },
  middleware: [thunk, logger],
});

export default store;
