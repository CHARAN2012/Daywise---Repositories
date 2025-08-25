import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  const loadBookings = async () => {
    const res = await axios.get("http://localhost:5000/bookings");
    setBookings(res.data || []);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="container my-4">
        <h3>All Bookings</h3>
        <table className="table">
          <thead><tr><th>ID</th><th>User</th><th>Total</th><th>Items</th><th>Date</th></tr></thead>
          <tbody>
            {bookings.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.userId}</td>
                <td>₹{b.total}</td>
                <td>{b.items.map((i) => i.turf?.title).join(", ")}</td>
                <td>{new Date(b.createdAt).toLocaleString()}</td>
              </tr>
            ))}
            {bookings.length === 0 && <tr><td colSpan="5">No bookings yet</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bookings;
