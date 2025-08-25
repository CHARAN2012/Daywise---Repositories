import React from "react";
import { Routes, Route } from "react-router-dom";

import Welcome from "./components/Welcome";
import Register from "./components/Register";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import UserDashboard from "./components/UserDashboard";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Bookings from "./components/Bookings";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="*" element={<Welcome />} />
    </Routes>
  );
};

export default App;
