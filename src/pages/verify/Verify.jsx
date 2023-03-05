import React, { useEffect, useState } from 'react';
import { FormContainer } from '../../components/formContainer/FormContainer';

import {  VERIFICATION } from '../../utils/constants';


export const Verify = (props) => {

    return (
      <div>
        <FormContainer type={VERIFICATION} title={"Enter code sent to your email"}/>
      </div>
    );

}