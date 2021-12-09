/* eslint-disable max-len */
import React from 'react';
import './Reservation.css';
import { FaSearch } from 'react-icons/fa';
import { HiMenuAlt4 } from 'react-icons/hi';

export default function Reservation() {
  return (
    <div className="reg">
      <header className="header">
        <div className="hamburger"><HiMenuAlt4 /></div>
        <div className="search">
          <FaSearch
            style={{
              color: '#34495e',
              paddingLeft: '15px',
            }}
          />

        </div>
      </header>
      <div className="container">
        <h1 className="reg-form-title">
          BOOK A CAR TODAY TO RIDE WITH US
        </h1>
        <div className="baar" />
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit rerum culpa aut inventore deleniti. Neque ducimus assumenda aliquid illum dolorum laboriosam quaerat esse maiores quidem. Consectetur iste qui molestias dicta? Minus iste voluptate nostrum quaerat doloremque. Eaque, iste velit nam adipisci quo suscipit deserunt! Esse dolor accusantium quis repudiandae!
        </p>
        <form className="select-book" action="#">
          <div className="reserve-wrapper">
            <div className="reserve-date">
              <input type="date" name="date" id="date" />
            </div>
            <div className="select-city">
              <select name="select">
                <option value="">London</option>
                <option value="">Kigali</option>
                <option value="">New York</option>
              </select>
            </div>
          </div>
          <div className="book-btn">
            <button type="submit" className="btn">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}
