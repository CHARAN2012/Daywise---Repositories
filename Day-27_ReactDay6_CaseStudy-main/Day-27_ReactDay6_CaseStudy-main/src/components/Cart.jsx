import React, { useEffect, useState } from "react";
import axios from "axios";
import UserNavbar from "./UserNavbar";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [items, setItems] = useState([]);

  const loadCart = async () => {
    const res = await axios.get("http://localhost:5000/cart", { params: { userId: user.id } });
    setItems(res.data || []);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const updateQty = async (item, qty) => {
    if (qty < 1) return;
    await axios.put(`http://localhost:5000/cart/${item.id}`, { ...item, qty });
    loadCart();
  };

  const removeItem = async (id) => {
    await axios.delete(`http://localhost:5000/cart/${id}`);
    loadCart();
  };

  const total = items.reduce((sum, i) => sum + (i.turf?.price || 0) * (i.qty || 1), 0);

  return (
    <>
      <UserNavbar />
      <div className="container my-4">
        <h3>Your Cart</h3>
        <table className="table">
          <thead><tr><th>Title</th><th>Qty</th><th>Subtotal</th><th>Actions</th></tr></thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id}>
                <td>{it.turf?.title}</td>
                <td>
                  <button onClick={() => updateQty(it, it.qty - 1)}>-</button>
                  <span className="mx-2">{it.qty}</span>
                  <button onClick={() => updateQty(it, it.qty + 1)}>+</button>
                </td>
                <td>₹{(it.turf?.price || 0) * (it.qty || 1)}</td>
                <td><button className="btn btn-sm btn-danger" onClick={() => removeItem(it.id)}>Remove</button></td>
              </tr>
            ))}
            {items.length === 0 && <tr><td colSpan="4">Cart is empty</td></tr>}
          </tbody>
        </table>
        <h5>Total: ₹{total}</h5>
        <button className="btn btn-success" onClick={() => navigate("/checkout")} disabled={!items.length}>Proceed to Checkout</button>
      </div>
    </>
  );
};

export default Cart;
