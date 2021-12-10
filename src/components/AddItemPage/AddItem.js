import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const AddItem = () => {
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
  };
  return (
    <div className='add-form'>
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
