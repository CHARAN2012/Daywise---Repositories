import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().required('Password is required')
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.get("http://localhost:5000/users", {
          params: { email: values.email, password: values.password }
        });
        if (res.data.length > 0) {
          const user = res.data[0];
          localStorage.setItem("user", JSON.stringify(user));
          alert("Login Successful!");
          if (user.role === "admin") navigate("/admin");
          else navigate("/user");
        } else {
          alert("Invalid credentials");
        }
      } catch (err) {
        console.error(err);
        alert("Login failed");
      }
    }
  });

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4 shadow-sm" style={{ width: '100%', maxWidth: 500 }}>
        <h3 className="mb-4 text-center">Login</h3>
        <form onSubmit={formik.handleSubmit}>
          
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email && <div className="invalid-feedback">{formik.errors.email}</div>}
          </div>
          
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password && <div className="invalid-feedback">{formik.errors.password}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
