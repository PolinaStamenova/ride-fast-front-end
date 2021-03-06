/* eslint-disable camelcase, jsx-quotes, quotes */

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { GrClose } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCar } from "../../redux/cars/cars";
import "./AddItem.css";

const AddItem = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [number_of_seats, setNumberOfSeats] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");

  const createCar = (car) => {
    axios
      .post("https://ridefast.herokuapp.com/api/v1/cars", car)
      .then((res) => {
        if (res.status === 201) {
          dispatch(addCar(car));
        }
      })
      .catch((error) => error);
  };

  const submitCarToStore = (e) => {
    e.preventDefault();

    const car = {
      id: uuidv4(),
      name,
      image,
      description,
      number_of_seats,
      duration,
      price,
    };
    createCar(car);
    setName("");
    setImage("");
    setDescription("");
    setNumberOfSeats("");
    setDuration("");
    setPrice("");
    navigate("/");
  };

  const closePage = () => {
    navigate("/");
  };

  return (
    <div className='add-form'>
      <div className='search' id='close'>
        <GrClose
          style={{
            color: "#97bf11",
            fontSize: "1.5rem",
            paddingLeft: "10px",
          }}
          onClick={closePage}
        />
      </div>
      <h1>ADD NEW CAR</h1>
      <form onSubmit={submitCarToStore} className='add-item-form'>
        <input
          className='add-item-input'
          value={name}
          placeholder='Car name'
          required
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='add-item-input'
          value={image}
          placeholder='Image URL'
          required
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          className='add-item-input'
          value={description}
          placeholder='Description'
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className='add-item-input'
          value={number_of_seats}
          placeholder='Number of seats'
          required
          onChange={(e) => setNumberOfSeats(e.target.value)}
        />
        <input
          className='add-item-input'
          value={price}
          placeholder='Price/per day'
          required
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className='add-item-input'
          value={duration}
          placeholder='Duration (in months)'
          required
          onChange={(e) => setDuration(e.target.value)}
        />
        <button className='add-item-btn' type='submit'>
          Add car
        </button>
      </form>
    </div>
  );
};

export default AddItem;
