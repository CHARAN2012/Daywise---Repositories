import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import TurfCard from "./TurfCard";

const UserDashboard = () => {
  const [turfs, setTurfs] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchTurfs = async () => {
    const res = await axios.get("http://localhost:5000/turfs");
    setTurfs(res.data || []);
  };

  useEffect(() => {
    fetchTurfs();
  }, []);

  const onAddToCart = async (turf) => {
    if (!user) {
      alert("Please login");
      return;
    }
    const existing = await axios.get("http://localhost:5000/cart", { params: { userId: user.id, turfId: turf.id } });
    if (existing.data.length > 0) {
      const item = existing.data[0];
      await axios.put(`http://localhost:5000/cart/${item.id}`, { ...item, qty: (item.qty || 1) + 1 });
    } else {
      await axios.post("http://localhost:5000/cart", { userId: user.id, turfId: turf.id, qty: 1, turf });
    }
    alert("Added to cart");
  };

  return (
    <>
      <UserNavbar />
      <div className="container my-4">
        <h3>Browse Turfs</h3>
        <div className="row g-3">
          {turfs.map((turf) => (
            <div className="col-12 col-md-4" key={turf.id}>
              <TurfCard turf={turf} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
