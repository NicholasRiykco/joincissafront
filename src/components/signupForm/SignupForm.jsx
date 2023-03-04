import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './styles.css';
import '../../index.css';
import { baseDevelopmentURL, SIGNUP } from '../../utils/constants';

export const SignupForm = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      occupation: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, 'Mininum 2 characters')
        .max(30, 'Maximum 30 characters')
        .required('Your first name is required'),
      lastName: Yup.string()
        .min(2, 'Mininum 2 characters')
        .max(30, 'Maximum 30 characters')
        .required('Your last name is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Your email is required')
        .test('Unique Email', 'Email already in use', function duplicateEmail(value) {
          return new Promise(async (resolve, reject) => {
            try {
              await axios.post(`${baseDevelopmentURL}/check/email`, {
                data: value,
              });
              resolve(true);
            } catch (err) {
              if (err.response.data.error === 'Email exists') {
                resolve(false);
              }
            }
          });
        }),
      password: Yup.string().min(8, 'Minimum 8 characters').required('You must enter a password'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password does not match')
        .required('You must enter a password'),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        const res = await axios.post(`${baseDevelopmentURL}/register`, {
          data: {
            userDetails: { firstName: values.firstName, lastName: values.lastName },
            authInfo: { email: values.email, password: values.password },
          },
        });

        // res.data.data.user['id'] = login.data.user.id;
        // res.data.data.user['token'] = login.data.user.token;

        // setLoggedIn(true);
        // setUser(user);
        navigate('/verify/email', { state: { values } });
      } catch (err) {
        setErrorMessage(err.message);
        setError(true);
      }
    },
  });

  useEffect(() => {
    document.title = 'HyperLink - Sign Up';
  }, []);

  return (
    <form onBlur={formik.handleBlur} onSubmit={formik.handleSubmit}>
      <div className="mt3">
        <label className="black">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          className="input-box-container input-reset"
          placeholder="First Name"
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <p className="input-error">{formik.errors.firstName}</p>
        )}
      </div>
      <div className="mt3">
        <label className="black">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          className="input-box-container input-reset"
          placeholder="Last Name"
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <p className="input-error">{formik.errors.lastName}</p>
        )}
      </div>

      <div className="mt3">
        <label className="black">Email</label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className="input-box-container input-reset"
          placeholder="Email"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="input-error">{formik.errors.email}</p>
        )}
      </div>
      <div className="mt3">
        <label className="black">Password</label>
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="input-box-container input-reset"
          placeholder="Password"
        />
        {formik.errors.password && formik.touched.password && (
          <p className="input-error">{formik.errors.password}</p>
        )}
      </div>
      <div className="mv3">
        <label className="black">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          className="input-box-container input-reset"
          placeholder="Confirm Password"
        />
        {formik.errors.confirmPassword && formik.touched.confirmPassword && (
          <p className="input-error">{formik.errors.confirmPassword}</p>
        )}
      </div>
      {error && <p className="input-error">{errorMessage}</p>}
      <div>
        <button type="submit" id="signup" className="solid-buttton">
          Sign Up
        </button>
        <br />
        <div className="lh-copy mt3">
          <Link to={'/login'} id="login" className="details-footer">
            Already have an account?
          </Link>
        </div>
      </div>
    </form>


  );
};

