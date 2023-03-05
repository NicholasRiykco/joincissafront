import React, { useEffect, useState } from 'react';
import { FormContainer } from '../../components/formContainer/FormContainer';

import { LOGIN, SIGNUP, VERIFICATION } from '../../utils/constants';


export const Login = (props) => {


    return (
      <div>
        <FormContainer type={LOGIN} title={"Log In"}/>
      </div>
    );


}