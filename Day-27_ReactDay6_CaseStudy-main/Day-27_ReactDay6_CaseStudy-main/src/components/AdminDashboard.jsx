import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./AdminNavbar";

const emptyForm = { title: "", location: "", price: "", description: "" };

const AdminDashboard = () => {
  const [turfs, setTurfs] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const fetchTurfs = async () => {
    const res = await axios.get("http://localhost:5000/turfs");
    setTurfs(res.data || []);
  };

  useEffect(() => {
    fetchTurfs();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/turfs/${editingId}`, { ...form, price: Number(form.price) });
      setEditingId(null);
    } else {
      await axios.post("http://localhost:5000/turfs", { ...form, price: Number(form.price) });
    }
    setForm(emptyForm);
    fetchTurfs();
  };

  const handleEdit = (turf) => {
    setEditingId(turf.id);
    setForm({ title: turf.title, location: turf.location, price: turf.price, description: turf.description });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/turfs/${id}`);
    fetchTurfs();
  };

  return (
    <>
      <AdminNavbar />
      <div className="container my-4">
        <h3>Manage Turfs</h3>
        <form onSubmit={handleSubmit} className="card p-3 mb-4">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="form-control mb-2" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="form-control mb-2" />
          <input name="price" type="number" value={form.price} onChange={handleChange} placeholder="Price/hour" className="form-control mb-2" />
          <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" className="form-control mb-2" />
          <button type="submit" className="btn btn-primary">{editingId ? "Update Turf" : "Add Turf"}</button>
        </form>

        <table className="table table-striped">
          <thead>
            <tr><th>Title</th><th>Location</th><th>Price</th><th>Description</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {turfs.map((t) => (
              <tr key={t.id}>
                <td>{t.title}</td>
                <td>{t.location}</td>
                <td>₹{t.price}</td>
                <td>{t.description}</td>
                <td>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => handleEdit(t)}>Edit</button>
                  <button className="btn btn-sm btn-danger" onClick={() => handleDelete(t.id)}>Delete</button>
                </td>
              </tr>
            ))}
            {turfs.length === 0 && <tr><td colSpan="5" className="text-center">No turfs</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminDashboard;
