import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {!isLoggedIn && <Link to="/register">Register</Link>}
      {!isLoggedIn && <Link to="/login">Login</Link>}
      {isLoggedIn && <Link to="/tasks">My Tasks</Link>}
      {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
};

export default Navbar;
