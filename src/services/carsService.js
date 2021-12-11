import { toast } from 'react-toastify';
import { getCarsAsync } from '../api/cars';
import { carsRequested, setCars, setCarsFailure } from '../redux/slices/carrs';

export const getCars = () => async (dispatch) => {
  dispatch(carsRequested());
  try {
    const response = await getCarsAsync();
    dispatch(setCars(response.data));
  } catch (error) {
    dispatch(setCarsFailure(error.response ? error.response.data.message : error.message));
    toast.error(error.response ? error.response.data.message : error.message);
  }
};

export const carsGe = () => {
  console.log('casrs');
};
