import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWithToken, reqWithToken } from '../../services/axios';

const CARS_ENDPOINT = 'cars/';

const FETCH_CARS = 'e2l-fe/cars/FETCH_CARS';
const ADD_CAR = 'e2l-fe/cars/ADD_CAR';
const DELETE_CAR = 'e2l-fe/cars/DELETE_CAR';

const initialState = [
  {
    "id": 1,
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "model": "Mahindra",
    "description": "4x4 Suv from india short description of the car",
    "image": "https://i.postimg.cc/YCGv7PmX/Mahindra-Scorpio-N-300620221053-removebg-preview.png"
  },
  {
    "id": 2,
    "model": "Chevrolet Camaro",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "V8 Sedan from America short description of the car",
    "image": "https://i.postimg.cc/y81zX370/car-photo-311956-removebg-preview.png"
  },
  {
    "id": 3,
    "model": "BMW new x8",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "Germany Sport Car 2021 winner of GSP short description of the car",
    "image": "https://i.postimg.cc/KvFXx3kC/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914-removebg-preview.png"
  },
  {
    "id": 4,
    "model": "Mahindra",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "4x4 Suv from india short description of the car",
    "image": "https://i.postimg.cc/YCGv7PmX/Mahindra-Scorpio-N-300620221053-removebg-preview.png"
  },
  {
    "id": 5,
    "model": "Chevrolet Camaro",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "V8 Sedan from America short description of the car",
    "image": "https://i.postimg.cc/y81zX370/car-photo-311956-removebg-preview.png"
  },
  {
    "id": 6,
    "model": "BMW new x8",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "Germany Sport Car 2021 winner of GSP short description of the car",
    "image": "https://i.postimg.cc/KvFXx3kC/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914-removebg-preview.png"
  },
  {
    "id": 7,
    "model": "Mahindra",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "4x4 Suv from india short description of the car",
    "image": "https://i.postimg.cc/YCGv7PmX/Mahindra-Scorpio-N-300620221053-removebg-preview.png"
  },
  {
    "id": 8,
    "model": "Chevrolet Camaro",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "V8 Sedan from America short description of the car",
    "image": "https://i.postimg.cc/y81zX370/car-photo-311956-removebg-preview.png"
  },
  {
    "id": 9,
    "model": "BMW new x8",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "Germany Sport Car 2021 winner of GSP short description of the car",
    "image": "https://i.postimg.cc/KvFXx3kC/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914-removebg-preview.png"
  },
  {
    "id": 10,
    "model": "Mahindra",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "4x4 Suv from india short description of the car",
    "image": "https://i.postimg.cc/YCGv7PmX/Mahindra-Scorpio-N-300620221053-removebg-preview.png"
  },
  {
    "id": 11,
    "model": "Chevrolet Camaro",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "V8 Sedan from America short description of the car",
    "image": "https://i.postimg.cc/y81zX370/car-photo-311956-removebg-preview.png"
  },
  {
    "id": 12,
    "model": "BMW new x8",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "Germany Sport Car 2021 winner of GSP short description of the car",
    "image": "https://i.postimg.cc/KvFXx3kC/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914-removebg-preview.png"
  },
  {
    "id": 13,
    "model": "Mahindra",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "4x4 Suv from india short description of the car",
    "image": "https://i.postimg.cc/YCGv7PmX/Mahindra-Scorpio-N-300620221053-removebg-preview.png"
  },
  {
    "id": 14,
    "model": "Chevrolet Camaro",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "V8 Sedan from America short description of the car",
    "image": "https://i.postimg.cc/y81zX370/car-photo-311956-removebg-preview.png"
  },
  {
    "id": 15,
    "model": "BMW new x8",
    "color": "white",
    "release_date": "2022-10-03",
    "price": "42500 USD",
    "description": "Germany Sport Car 2021 winner of GSP short description of the car",
    "image": "https://i.postimg.cc/KvFXx3kC/BMW-Z4-Roadster-Right-Front-Three-Quarter-153914-removebg-preview.png"
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