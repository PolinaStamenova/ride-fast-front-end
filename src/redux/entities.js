import { combineReducers } from '@reduxjs/toolkit';
// import cars from './slices/cars';
import carrs from './slices/carrs';
import cities from './slices/cities';
import reservation from './slices/reservation';

const entities = combineReducers({
  // cars,
  reservation,
  cities,
  carrs,
});

export default entities;
