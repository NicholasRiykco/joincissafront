import React, { useEffect, useState } from 'react';
import LandingNavbar from '../../components/landingNavbar/landing-navbar';

import './welcome.css';
import Rocket from '../../images/Group 8.png';

export const Welcome = (props) => {

    return (
      <div>
        <LandingNavbar/>
        <div className='About'>
            <div className='column1'>
                <h1>Connecting you to People</h1>
                <p>Inclusive writing with AI-powered assistance.</p>
                <button>Try DiversityaI it's free</button>
            </div>
            <div className='column2'>
                <img src={Rocket} />
            </div>
        </div>
        <div className='Mission'>

        </div>
        <div className='Features'>

        </div>
        <div className='Team'>

        </div>
      </div>
    );

}