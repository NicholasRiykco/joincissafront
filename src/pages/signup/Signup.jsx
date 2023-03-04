import React, { useEffect, useState } from 'react';
import { FormContainer } from '../../components/formContainer/FormContainer';

import {  SIGNUP } from '../../utils/constants';


export const Signup = (props) => {


    return (
      <div>
        <FormContainer type={SIGNUP} title={"Sign Up"}/>
      </div>
    );


}