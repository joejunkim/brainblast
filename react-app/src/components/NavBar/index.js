
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import './NavBar.css'

const NavBar = () => {
  return (
    <nav id='navbar__container'>
      <NavLink to='/' exact={true} activeClassName='active'>BrainBlast</NavLink>
      <NavLink to='/login' exact={true} activeClassName='active'>Login</NavLink>
      <NavLink to='/sign-up' exact={true} activeClassName='active'>Sign Up</NavLink>
      <LogoutButton />
    </nav>
  );
}

export default NavBar;
