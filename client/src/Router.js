// components/Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AddUptStudent from './AddUptStudent';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/addUpt" element={<AddUptStudent/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
