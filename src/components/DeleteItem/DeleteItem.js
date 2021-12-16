/* eslint-disable jsx-quotes,
 quotes, react/self-closing-comp, react/jsx-closing-tag-location,
 */

import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCars } from "../../services/carsService";
import { removeCar } from "../../redux/cars/cars";
import "./DeleteItem.css";

export default function DeleteItem() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.entities.reservation);
  const { list: cars } = useSelector((state) => state.entities.carrs);
  const [id, setId] = useState(0);

  const closePage = () => {
    history("/");
  };

  const deleteCar = async () => {
    console.log(id);
    const url = 'https://ridefast.herokuapp.com/api/v1/delete_car';
    const requestBody = JSON.stringify({ car_id: id });
    await fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    })
      .then((res) => {
        alert("Are you sure you want to delete this car?");
        console.log(res);
        if (res.status === 201 || res.status === 200) {
          alert("Car Deleted");

          dispatch(removeCar(id));
          history("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setId(Number(e.target.value));
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
  }, []);

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
              <button type='submit' className='button-x' onClick={closePage}>
                <i
                  className='fas fa-times x-icon'
                  style={{
                    color: "#97bf11",
                    fontSize: "1.5rem",
                    paddingLeft: "12px",
                  }}
                ></i>
              </button>
            </div>
          </header>
          <div className='containerr'>
            <h1 className='reg-form-title'>REMOVE A CAR</h1>
            <div className='baar' />
            <p className='description'>
              Welcome to RideFast, the best car rental service in the world.
              Choose a car that you want to remove from the drop down menu. For
              more information, please contact us. Thank you for choosing us.
            </p>
            <div className='select-book'>
              <div className='reserve-wrapper'>
                <div className='select-city'>
                  <select onChange={handleChange}>
                    <option>Select a car</option>
                    {cars.map((car) => (
                      <option key={car.id} value={car.id}>
                        {car.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='book-btn'>
                <button type='button' className='btn' onClick={deleteCar}>
                  Delete Car
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
