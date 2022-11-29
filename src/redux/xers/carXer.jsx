import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithToken, reqWithToken } from '../../services/axios';

const CARS_ENDPOINT = 'cars/';

const FETCH_CARS = 'e2l-fe/cars/FETCH_CARS';
const ADD_CAR = 'e2l-fe/cars/ADD_CAR';
const DELETE_CAR = 'e2l-fe/cars/DELETE_CAR';

const initialState = [
  {
    "id": 1,
    "color": "",
    "release_date": "",
    "price": "",
    "model": "",
    "description": "ONLOAD ...",
    "image": "https://i.postimg.cc/YCGv7PmX/Mahindra-Scorpio-N-300620221053-removebg-preview.png"
  }
];

const carXer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_CARS}/fulfilled`:
      return action.payload;

    case `${ADD_CAR}/fulfilled`:
      return [...state, action.payload];

    case DELETE_CAR:
      return state.filter((learner) => learner.id !== action.payload);

    default:
      return state;
  }
};

const fetchCars = createAsyncThunk(FETCH_CARS, async () => {
  const response = await getWithToken(CARS_ENDPOINT);
  return response.data;
});

const addCar = createAsyncThunk(ADD_CAR, async (newCar) => {
  await reqWithToken('POST', CARS_ENDPOINT, newCar);
});

const deleteCar = createAsyncThunk(DELETE_CAR, async (id) => {
  await reqWithToken('DELETE', CARS_ENDPOINT, id);
});

export default carXer;
export {
  fetchCars, addCar, deleteCar,
};
