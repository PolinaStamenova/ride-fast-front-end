/* eslint-disable no-return-await */
import http from '../services/httpService';
import { BASE_URL } from '../utils/constants';

export const getCarsAsync = async () => await http.get(`${BASE_URL}/cars`);
export const deleteCarAsync = async (carId) => await http.delete(`${BASE_URL}/cars/${carId}`);
