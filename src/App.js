/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './components/HomePage/Login';
import SignUp from './components/HomePage/SignUp';
import HomePage from './components/HomePage/HomePage';
import AddItem from './components/AddItem/AddItem';
import 'react-toastify/dist/ReactToastify.css';

// After adding the proper routes -> please, remove line 1 and this comment.
const App = () => (
  <div className="app">
    <ToastContainer />
    <Router>
      <Routes>
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route exact path="/" element={<HomePage />} />
        <Route path="/cars" exact element={<HomePage />} />
        {/* <Route exact path='/main' element={<Main />} /> */}
        {/* <Route exact path='/myreservations' element={<MyReservations />} /> */}
        <Route exact path="/addItem" element={<AddItem />} />
        {/* <Route exact path='/deleteItem' element={<DeleteItem />} /> */}
        {/* <Route exact path='/reserve' element={<ReserveItem />} /> */}
      </Routes>
    </Router>
  </div>
);

export default App;
