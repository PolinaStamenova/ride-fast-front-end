/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

// After adding the proper routes -> please, remove line 1 and this comment.
const App = () => (
  <Router>
    <Nav />
    <Routes>
      {/* <Route path='/' element={<Home />} /> */}
      {/* <Route exact path='/main' element={<Main />} /> */}
      {/* <Route exact path='/myreservations' element={<MyReservations />} /> */}
      {/* <Route exact path='/addItem' element={<AddItem />} /> */}
      {/* <Route exact path='/deleteItem' element={<DeleteItem />} /> */}
      {/* <Route exact path='/reserve' element={<ReserveItem />} /> */}
    </Routes>
  </Router>
);

export default App;
