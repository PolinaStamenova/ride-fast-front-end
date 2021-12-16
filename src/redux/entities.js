import { combineReducers } from '@reduxjs/toolkit';
import carrs from './slices/carrs';
import cities from './slices/cities';
import reservation from './slices/reservation';

const entities = combineReducers({
  reservation,
  cities,
  carrs,
});

export default entities;
