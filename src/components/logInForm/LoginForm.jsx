import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import cookie from 'react-cookies';

import '../formContainer/styles.css';
import { baseDevelopmentURL, LOGIN } from '../../utils/constants';
// import { Header } from '../../components/Header';

export const LoginForm = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = 'dummy';

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      email: location?.state?.resetSuccess ? location?.state?.email : '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email format').required('Your email is required'),
      password: Yup.string().required('You must enter a password'),
    }),
    onSubmit: async (values) => {
      // alert(JSON.stringify(values, null, 2));
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${baseDevelopmentURL}/login`, {
          data: {
            email: values.email,
            password: values.password,
          },
        });
        console.log(res.data);

        localStorage.setItem('access_token', res.data.user.token);
        localStorage.setItem('userName', res.data.user.name.first);
        localStorage.setItem('userNameLast', res.data.user.name.last);
        localStorage.setItem('userId', res.data.user.id);
        localStorage.setItem('userEmail', res.data.user.email);
        // cookie.save('access_token', res.data.user.token);

        navigate('/dashboard');
      } catch (err) {
        setErrorMessage(err.response.data.message);
        setError(true);
      }
    },
  });

  useEffect(() => {
    const notify = () =>
      toast.success('Your password has been successfully reset!', {
        position: 'top-center',
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: id,
      });

    location?.state?.resetSuccess && notify();

    document.title = 'DiverseAI - Login';
  }, []);

  return (
    <form onBlur={formik.handleBlur} onSubmit={formik.handleSubmit}>
      <div className="mt3">
        <label className="login-signup-label">Email</label>
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="email"
          className="input-box-container input-reset"
        />
        {formik.errors.email && formik.touched.email && (
          <p className="input-error">{formik.errors.email}</p>
        )}
      </div>
      <div className="mv3">
        <label className="login-signup-label">Password</label>
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
        {error && <p className="input-error">{errorMessage}</p>}
      </div>
      <div>
        <div>
          <Link to={'/password/start/reset'} className="forgot-password">
            Forgot your password?
          </Link>
        </div>
        <br />
        <button type="submit" id="login" className="solid-button">
          Log In
        </button>
        <br />
        <div className="form-footer">
          Don't have an account?
          <Link to={'/signup'} className="details-footer">
            Click to sign up
          </Link>
        </div>
      </div>
    </form>

  );
};

