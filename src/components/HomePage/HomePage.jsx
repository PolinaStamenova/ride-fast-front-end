/* eslint-disable import/extensions */
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import './HomePage.css';
import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import storage from '../../services/storageService';
import { logoutUser } from '../../services/authService';
import { carsSelector, fetchCarsDataAsync } from '../../redux/slices/cars';
import Nav from '../Nav';

function HomePage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const mainDiv = useRef();
  const carArray = useSelector((state) => carsSelector(state));
  const handleLogOut = () => {
    dispatch(logoutUser(history));
    history('/login');
  };
  const cars = carArray.map((car) => (
    <Col key={car.id} sm={12} md={4}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={car.image} alt="" className="car-img" />
        <h5 className="mt-3 fsize-15">{car.name.toUpperCase()}</h5>
        <div className="d-flex fsize-3 mb-4 text-muted">
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
        </div>
        <p className="fsize-12">{car.description}</p>
        <div>
          <i className="fab fa-facebook border border-secondary rounded-circle p-1 me-1" />
          <i className="fab fa-twitter border border-secondary rounded-circle p-1 me-1" />
          <i className="fab fa-instagram border border-secondary rounded-circle p-1" />
        </div>
      </div>
    </Col>
  ));
  useEffect(() => {
    const token = storage.getAuthToken();
    if (!token) {
      history('/login');
    }
    dispatch(fetchCarsDataAsync());
  }, [history]);
  const scrollRight = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth, 0);
  };
  const scrollLeft = () => {
    mainDiv.current.scrollBy(mainDiv.current.childNodes[0].offsetWidth * -1, 0);
  };

  return (
    <div className="contents">
      <Nav handleLogOut={handleLogOut} />
      <div className="homepage">
        <h2 className="header-text">LATEST CARS</h2>
        <h4 className="text-muted fsize-15 mb-5">Please Select A Car</h4>
        <div className="d-flex fsize-5 mb-4 text-muted">
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
          <i className="fa fa-circle me-1" />
        </div>
        <div className="mt-4 w-100 d-flex justify-content-between align-items-center">
          <div id="previousButtonContainer">
            <div
              onClick={scrollLeft}
              onKeyPress={scrollLeft}
              role="button"
              tabIndex="0"
              id="previousButton"
            >
              <i className="fa fa-caret-left fsize-25" />
            </div>
          </div>
          <Row id="mainDiv" ref={mainDiv}>
            {cars}
          </Row>
          <div id="nextButtonContainer">
            <div
              onClick={scrollRight}
              onKeyPress={scrollRight}
              role="button"
              tabIndex="0"
              id="nextButton"
            >
              <i className="fa fa-caret-right fsize-25" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
