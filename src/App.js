import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
// import HomePage from './pages/HomePage';
 import Register from './components/Register';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskUpdate from './components/TaskUpdate';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/taskform" element={<TaskForm />} />
        <Route path="/updatetaskform" element={<TaskUpdate />} />
        {/* <Route path="/tasks/update/:taskId" element={<TaskUpdate />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
