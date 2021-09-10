import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

const LandingPage = () => {
  return (
    <div id='landing__container'>
        <div id='landing__main'>Main Text</div>
        <div id='landing__sub'>Sub Text</div>
    </div>
  );
}

export default LandingPage;
