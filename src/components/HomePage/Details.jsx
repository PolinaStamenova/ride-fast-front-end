import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { logoutUser } from '../../services/authService';
import Nav from '../Nav';
import { carsSelector } from '../../redux/slices/cars';

function Details() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const carArray = useSelector(carsSelector);
  const currentCar = carArray.find((car) => car.id === location.state.carId);
  const handleLogOut = () => {
    dispatch(logoutUser(history));
    history('/login');
  };
  return (
    <div>
      <Nav handleLogOut={handleLogOut} />
      <div>
        <div>
          <img alt="" src={currentCar.image} />
          <div
            id="previousButtonContainer"
          >
            <div
              onClick={() => {
                history('/');
              }}
              onKeyPress={() => {}}
              role="button"
              tabIndex="0"
              id="previousButton"
            >
              <i className="fa fa-caret-left fsize-25" />
            </div>
          </div>
        </div>
        <div>
          <h5>{currentCar.name.toUpperCase()}</h5>
          <p>- $50 deposit on any purchase</p>
          <Table striped>
            <tbody>
              <tr>
                <td>PRICE</td>
                <td>{`${currentCar.price}`}</td>
              </tr>
              <tr>
                <td>NUMBER OF SEATS</td>
                <td>{`${currentCar.number_of_seats}`}</td>
              </tr>
              <tr>
                <td>DURATION</td>
                <td>{`${currentCar.duration} Months`}</td>
              </tr>
            </tbody>
          </Table>
          <h4>Description</h4>
          <p>{currentCar.description}</p>
          <Button variant="success">
            <i className="far fa-bookmark" />
            RESERVE
            <i className="fa fa-arrow-circle-right" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Details;
