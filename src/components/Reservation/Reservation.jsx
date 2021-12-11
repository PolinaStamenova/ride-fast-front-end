import React, { useEffect, useState } from 'react';
import './Reservation.css';
import { FaSearch } from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCars } from '../../services/carsService';
import {
  createReservation,
} from '../../services/reservationService';
import { getCities } from '../../services/citiesService';
import storage from '../../services/storageService';

export default function Reservation() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entities.reservation);
  const currentUser = storage.getAuthToken();
  const { list: cars } = useSelector((state) => state.entities.carrs);
  const { list: cities } = useSelector((state) => state.entities.cities);
  const [reservation, setReservation] = useState({
    city: '',
    car: '',
    startDate: '',
    endDate: '',
  });
  const loadCities = async () => {
    try {
      dispatch(getCities());
    } catch (error) {
      console.log('Loading cities Error');
    }
  };
  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };
  const loadCars = async () => {
    try {
      dispatch(getCars());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadCars();
    loadCities();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createReservation({
        car_id: reservation.car,
        user_id: currentUser.id,
        city_id: reservation.city,
        start_date: reservation.startDate,
        end_date: reservation.endDate,
      }),
    ).then(() => {
      history('/');
    });
  };

  const {
    city, startDate, endDate, car,
  } = reservation;

  return (
    <div className="reg">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <header className="header">
            <div className="hamburger">
              <HiMenuAlt4 />
            </div>
            <div className="search">
              <FaSearch
                style={{
                  color: '#97bf11',
                  fontSize: '1.5rem',
                  paddingLeft: '15px',
                }}
              />
            </div>
          </header>
          <div className="containerr">
            <h1 className="reg-form-title">BOOK A CAR TODAY TO RIDE WITH US</h1>
            <div className="baar" />
            <p className="description">
              Welcome to CarRent, the best car rental service in the world.
              Book a car today and enjoy your trip.
              in order to book a car, you must be logged in.
              select your city, car, start date and end date.
              then click on the book button.
              this will create a reservation for you.
              for more information, please contact us.
              thank you for choosing us.
            </p>
            <form className="select-book" onSubmit={handleSubmit}>
              <div className="reserve-wrapper">
                <div className="reserve-date">
                  <label htmlFor="startDate">
                    Start Date:
                    <input
                      type="date"
                      name="startDate"
                      id="date"
                      value={startDate}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className="reserve-date">
                  <label htmlFor="endDate">
                    End Date:
                    <input
                      type="date"
                      name="endDate"
                      id="date"
                      value={endDate}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className="select-and-book">
                <div className="select-city">
                  <select name="city" value={city} onChange={handleChange}>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="select-city">
                  <select name="car" value={car} onChange={handleChange}>
                    {cars.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="book-btn">
                <button type="submit" className="btn">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
