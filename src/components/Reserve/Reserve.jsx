/* eslint-disable quotes, jsx-quotes, comma-dangle */

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { createReservation } from "../../services/reservationService";
import { getCities } from "../../services/citiesService";
import storage from "../../services/storageService";
import "../Reservation/Reservation.css";
import "./Reserve.css";

export default function Reserve() {
  const location = useLocation();

  const { id, name } = location.state.currentCar;
  const history = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entities.reservation);
  const currentUser = storage.getAuthToken();
  const { list: cities } = useSelector((state) => state.entities.cities);
  const [reservation, setReservation] = useState({
    city: "",
    car: id,
    startDate: "",
    endDate: "",
  });
  const loadCities = async () => {
    try {
      dispatch(getCities());
    } catch (error) {
      console.log("Loading cities Error");
    }
  };
  const handleChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  useEffect(() => {
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
      })
    ).then(() => {
      history("/");
    });
  };

  const { city, startDate, endDate } = reservation;

  return (
    <div className='reg'>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <header className='header'>
            <div className='hamburger'>
              <HiMenuAlt4 />
            </div>
            <div className='search'>
              <FaSearch
                style={{
                  color: "#97bf11",
                  fontSize: "1.5rem",
                  paddingLeft: "15px",
                }}
              />
            </div>
          </header>
          <div className='containerr'>
            <h1 className='reg-form-title'>
              {`Book ${name} TODAY TO RIDE WITH US`}
            </h1>
            <div className='baar' />
            <p className='description'>
              Welcome to FastRide, the best car rental service in the world.
              Book a car today and enjoy your trip. in order to book a car, you
              must be logged in. select your city, car, start date and end date.
              Then click on the book button. This will create a reservation for
              you. For more information, please contact us. Thank you for
              choosing us.
            </p>
            <form className='select-book' onSubmit={handleSubmit}>
              <div className='reserve-wrapper'>
                <div className='reserve-date'>
                  <label htmlFor='startDate'>
                    Start Date:
                    <input
                      type='date'
                      name='startDate'
                      id='date'
                      value={startDate}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <div className='reserve-date'>
                  <label htmlFor='endDate'>
                    End Date:
                    <input
                      type='date'
                      name='endDate'
                      id='date'
                      value={endDate}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
              </div>
              <div className='select-city-and-book'>
                <div className='select-city-drop-down'>
                  <select name='city' value={city} onChange={handleChange}>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='book-btn'>
                <button type='submit' className='btn'>
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
