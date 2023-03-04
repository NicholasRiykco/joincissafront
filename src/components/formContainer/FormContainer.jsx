import React, { useEffect, useState } from 'react';

import { LOGIN, SIGNUP, VERIFICATION } from '../../utils/constants';
import { LoginForm } from '../logInForm/LoginForm';
import { SignupForm } from '../signupForm/SignupForm';

export const FormContainer = ({type, title}) => {
  let form;

  if (type === LOGIN) {
      form = < LoginForm />;
    } else if (type === SIGNUP) {
      form = < SignupForm />;
    }

    return (
      <div className="body">
      <div className="details-container">
        <main className="details-main">
          <div className="measure">
            <h1 className="details-title ">{title}</h1>
            {form}
          </div>
        </main>
      </div>
    </div>

    );


}