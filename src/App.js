import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import HomePage from './pages/HomePage';
 import Register from './components/Register';
import Login from './components/Login';
// import UserTasksPage from './pages/UserTasksPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/tasks" element={<UserTasksPage />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
