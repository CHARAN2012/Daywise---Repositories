import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const res = await axios.get("http://localhost:5000/cart", { params: { userId: user.id } });
    setCart(res.data || []);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const placeOrder = async () => {
    if (!cart.length) return alert("Cart empty");
    const booking = {
      userId: user.id,
      items: cart,
      total: cart.reduce((s, i) => s + (i.turf?.price || 0) * (i.qty || 1), 0),
      createdAt: new Date().toISOString(),
    };
    await axios.post("http://localhost:5000/bookings", booking);
    for (let c of cart) {
      await axios.delete(`http://localhost:5000/cart/${c.id}`);
    }
    alert("Booking successful!");
    navigate("/user");
  };

  return (
    <>
      <UserNavbar />
      <div className="container my-4">
        <h3>Checkout</h3>
        <p>Total items: {cart.length}</p>
        <button className="btn btn-primary" onClick={placeOrder} disabled={!cart.length}>Place Booking</button>
      </div>
    </>
  );
};

export default Checkout;
