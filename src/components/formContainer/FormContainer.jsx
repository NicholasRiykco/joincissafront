import React, { useEffect, useState } from 'react';

import { LOGIN, SIGNUP, VERIFICATION } from '../../utils/constants';
import { LoginForm } from '../logInForm/LoginForm';
import { SignupForm } from '../signupForm/SignupForm';
import { VerificationForm } from '../verificationForm/VerificationForm';


export const FormContainer = ({type, title}) => {
  let form;

  if (type === LOGIN) {
      form = < LoginForm />;
    } else if (type === SIGNUP) {
      form = < SignupForm />;
    } else if (type === VERIFICATION){
      form = < VerificationForm />;
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
      <img id="blob1" src="../../images/Vector 7.png"/>
      <img id="blob2" src="../../images/Vector 8.png"/>
    </div>

    );


}