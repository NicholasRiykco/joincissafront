import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingNavbar from '../../components/landingNavbar/landing-navbar';

import './welcome.css';
import DiamondIcon from '@mui/icons-material/Diamond';
import Rocket from '../../images/Group 8.png';
import Blur from '../../images/Group 9.png';
// import Background from '../../images/Background.png';
import Charlie from '../../images/charlie.jpeg';
import James from '../../images/james.jpeg';
import Kelsey from '../../images/kelsey.jpeg';
import Nadya from '../../images/nad.JPG';
import Riykco from '../../images/nic.jpeg';

export const Welcome = (props) => {

    return (
      <div>
        <LandingNavbar/>
        <div className='About'>
            <div className='column1'>
                <h1>Connecting you to People</h1>
                <p>Inclusive writing with AI-powered assistance.</p>
                <button className='landing-button'>
                    <Link to={'/signup'}>Try DiverseAI it's free</Link>
                </button>
            </div>
            <div className='column2'>
                <img src={Rocket} />
            </div>
        </div>
        <div className='Mission'>
            <div className='column1'>
                <img id='blur-landing' src={Blur} />
            </div>
            <div className='column2'>
                <h4>Our Mission</h4>
                <h2>To make hiring more efficient and fair for everyone.</h2>
                <p>DiverseAI enables employers and recruiters to confidently communicate their commitment to inclusivity in job postings, and attract diverse and highly qualified candidates.</p>
            </div>
        </div>
        <div className='Features'>
            <div className='header'>
                <h4>Our Features</h4>
                <h2>We empower talent teams to make data-driven and fair decisions.</h2>
            </div>
            <div className='feature-cards'>
                <div className='card-container'>
                    <p><strong>Inclusivity Suggestions</strong></p>
                    <p>Uses Bias Guidance that helps you avoid small mistakes that could have a big impact on how candidates perceive your communications.</p>
                </div>
                <div className='card-container'>
                    <p><strong>Predictive Performance</strong></p>
                    <p>We’ve combined everything you need to know about inclusive recruitment copywriting into a single predictive performance score.</p>
                </div>
                <div className='card-container'>
                    <span className='premium'>PREMIUM<DiamondIcon/></span>
                    <p><strong>Store & Deploy</strong></p>
                    <p>Store recruitment copy drafts and schedule direct deployment into your applicant tracking system.</p>
                </div>
                <div className='card-container'>
                    <span className='premium'>PREMIUM<DiamondIcon/></span>
                    <p><strong>Custom Style Guides</strong></p>
                    <p>Apply shared guidelines help teams sound consistent by encouraging the language and tones unique to your brand.</p>
                </div>
                <div className='card-container'>
                    <span className='premium'>PREMIUM<DiamondIcon/></span>
                    <p><strong>Uncover Insights</strong></p>
                    <p>Get a comprehensive view into overall content and language used used in your recruitment copies with intuitive data visualisations.</p>
                </div>
                <div className='card-container'>
                    <span className='premium'>PREMIUM<DiamondIcon/></span>
                    <p><strong>Collaborative Editing</strong></p>
                    <p>Empower your team to share knowledge and collaborate quickly.</p>
                </div>
            </div>
        </div>
        <div className='Team'>
            <h4>Our Team</h4>
            <h2>We’ve climbed a long way – <br/>with much farther to summit</h2>
            <div className='team-photos'>
                <div className='team-card'>
                    <img src={Charlie}/>
                    <label className='team-label'>Charlie Ding</label>
                </div>
                <div className='team-card'>
                    <img src={James}/>
                    <label className='team-label'>James Xu</label>
                </div>
                <div className='team-card'>
                    <img src={Kelsey}/>
                    <label className='team-label'>Kelsey Sun</label>
                </div>
                <div className='team-card'>
                    <img src={Nadya}/>
                    <label className='team-label'>Nadya Aurelia H</label>
                </div>
                <div className='team-card'>
                    <img src={Riykco}/>
                    <label className='team-label'>Nicholas Riykco W</label>
                </div>
            </div>
        </div>
      </div>
    );

}