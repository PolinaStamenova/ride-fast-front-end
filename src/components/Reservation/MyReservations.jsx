import React, { useEffect, useState } from 'react';
import './MyReservations.css';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getCars } from '../../services/carsService';
import { getCities } from '../../services/citiesService';
import storage from '../../services/storageService';

export default function MyReservations() {
  const dispatch = useDispatch();
  const currentUser = storage.getAuthToken();
  const { list: cars } = useSelector((state) => state.entities.carrs);
  const { list: cities } = useSelector((state) => state.entities.cities);
  const [reservations, setReservations] = useState([]);
  const loadCities = async () => {
    try {
      dispatch(getCities());
    } catch (error) {
      console.log('Loading cities Error');
    }
  };
  const loadCars = async () => {
    try {
      dispatch(getCars());
    } catch (error) {
      console.log(error);
    }
  };

  const getReservations = async () => {
    let allReservations = await fetch(`https://ridefast.herokuapp.com/api/v1/reservations/${currentUser.id}`);
    allReservations = await allReservations.json();
    setReservations(allReservations.data);
  };

  const Reservations = (
    <>
      {
        reservations.length > 0 ? (
          reservations.map((reservation, index) => {
            const car = cars.find((car) => car.id === reservation.car_id);
            const city = cities.find((city) => city.id === reservation.city_id);
            return (
              <tr key={reservation.id}>
                <td>{index + 1}</td>
                <td>{car.name}</td>
                <td>{city.name}</td>
                <td>{reservation.start_date}</td>
                <td>{reservation.end_date}</td>
              </tr>
            );
          })) : <p>Loading...</p>
  }
    </>
  );

  useEffect(async () => {
    await loadCars();
    await loadCities();
    await getReservations();
  }, []);

  return (
    <div className="reg">
      <div>
        <div className="containerrr">
          <h1 className="mt-4">MY RESERVATIONS</h1>
          <Table className="mt-3 table-bordered text-white">
            <thead>
              <tr>
                <td>
                  #
                </td>
                <td>
                  Item
                </td>
                <td>
                  City
                </td>
                <td>
                  Start Date
                </td>
                <td>
                  End Date
                </td>
              </tr>
            </thead>
            <tbody>
              {Reservations}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
