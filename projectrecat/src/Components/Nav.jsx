import React from 'react';
import { NavLink , useNavigate } from 'react-router-dom';



const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate;
  const logout = () =>
  {
     localStorage.clear();
     navigate('/Signup')
  }

  return (
    <nav>
      <ul className='Nav-ul'>
        <li><NavLink to="/">PRODUCTS</NavLink></li>
        <li><NavLink to="/Add">ADD-PRODUCTS</NavLink></li>
        <li><NavLink to="/Apdat">APDAT-PRODUCTS</NavLink></li>
        <li><NavLink to="/Profile">PROFILE</NavLink></li>
        <li>
  {auth ? (
    <NavLink onClick={logout} to="/Signup">LOGOUT</NavLink>
  ) : (
    <NavLink to="/Signup">SIGN-UP</NavLink>
  )}
</li>

      </ul>
    </nav>
  );
};

export default Nav;
