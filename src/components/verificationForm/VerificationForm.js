import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

import "./styles.css";
import "../../index.css";
import { baseDevelopmentURL } from "../../utils/constants";

export const VerificationForm = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required("Your code is required"),
    }),
    onSubmit: async (values) => {
      try {
        const valData = location.state.values;

        await axios.post(`${baseDevelopmentURL}/register/verify`, {
          data: {
            userDetails: {
              firstName: valData.firstName,
              lastName: valData.lastName,
            },
            authInfo: { email: valData.email, password: valData.password },
            code: values.code,
          },
        });

        navigate("/login");
      } catch (err) {
        setSuccess(false);
        setErrorMessage(err.response.data.message);
        setError(true);
      }
    },
  });

  useEffect(() => {
    document.title = "HyperLink - Verify Email";
  }, []);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="mv3">
        <label className="black">Code</label>
        <input
          type="text"
          name="code"
          value={formik.values.code}
          onChange={formik.handleChange}
          placeholder="code"
          className="input-box-container input-reset"
        />
        {formik.errors.code && formik.touched.code && (
          <p className="input-error">{formik.errors.code}</p>
        )}
        {error && <p className="input-error">{errorMessage}</p>}
        {success && <p className="input-success">{successMessage}</p>}
      </div>
      <div>
        <button type="submit" id="login" className="solid-buttton">
          Submit
        </button>
      </div>
    </form>
  );
};
