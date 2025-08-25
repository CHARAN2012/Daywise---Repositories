import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/admin">Turf Admin</NavLink>

        <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse" data-bs-target="#adminNav"
          aria-controls="adminNav" aria-expanded="false"aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/admin">
                Manage Turfs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/bookings">
                View Bookings
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-light ms-2" onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
