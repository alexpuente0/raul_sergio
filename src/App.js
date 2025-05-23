import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navBar';
import './App.css';
import HomeES from './pages/homeES';
import "react-multi-carousel/lib/styles.css";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homeES" element={<HomeES />} />
    </Routes>
  </>
);

export default App;
