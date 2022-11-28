import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithToken, reqWithToken } from '../../services/axios';

const RESERVATIONS_ENDPOINT = 'reservations/';

const FETCH_RESERVATIONS = 'e2l-fe/reservations/FETCH_RESERVATIONS';
const ADD_RESERVATION = 'e2l-fe/reservations/ADD_RESERVATION';

const reservationXer = (state = [], action) => {
  switch (action.type) {
    case `${FETCH_RESERVATIONS}/fulfilled`:
      return action.payload;

    case `${ADD_RESERVATION}/fulfilled`:
      return [...state, action.payload];

    default:
      return state;
  }
};

const fetchReservations = createAsyncThunk(FETCH_RESERVATIONS, async () => {
  const response = await getWithToken(RESERVATIONS_ENDPOINT);
  return response.data;
});

const addReservation = createAsyncThunk(ADD_RESERVATION, async (newReservation) => {
  await reqWithToken('POST', RESERVATIONS_ENDPOINT, newReservation);
});

export default reservationXer;
export {
  fetchReservations, addReservation,
};
