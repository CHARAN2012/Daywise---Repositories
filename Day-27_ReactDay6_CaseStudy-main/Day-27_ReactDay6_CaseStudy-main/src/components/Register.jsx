import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '' },
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'At least 3 characters').required('Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'At least 6 characters').required('Password is required')
    }),
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:5000/users", { ...values, role: "user" });
        alert("Registration Successful!");
        navigate("/login");
      } catch (err) {
        alert("Registration failed");
        console.error(err);
      }
    }
  });

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: 500 }}>
        <h3 className="mb-4 text-center">Register</h3>
        <form onSubmit={formik.handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name && <div className="invalid-feedback">{formik.errors.name}</div>}
          </div>
          {/* Email */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
          </div>
          {/* Password */}
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
          </div>
          <button type="submit" className="btn btn-success w-100 mt-3">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
