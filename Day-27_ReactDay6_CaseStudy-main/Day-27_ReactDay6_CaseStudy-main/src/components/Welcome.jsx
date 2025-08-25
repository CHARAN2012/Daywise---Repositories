import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <div className="text-center p-5 border rounded shadow bg-white" style={{ maxWidth: '700px' }}>
        <h1 className="mb-4">Welcome to Turf Management System</h1>
        <p className="mb-4">Please login or register to continue</p>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-primary"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="btn btn-success"
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
