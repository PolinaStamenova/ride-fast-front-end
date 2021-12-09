import { useDispatch } from 'react-redux';
import './Login.css';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import storage from '../../services/storageService';
import { logoutUser } from '../../services/authService';
import Nav from '../Nav';
// import Reservation from '../Reservation/Reservation';

function HomePage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser(history));
    history('/login');
  };
  useEffect(() => {
    const token = storage.getAuthToken();
    if (!token) {
      history('/login');
    }
  }, [history]);
  return (
    <div>
      <Nav handleLogOut={handleLogOut} />
    </div>
  );
}

export default HomePage;
