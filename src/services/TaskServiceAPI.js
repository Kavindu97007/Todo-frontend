import axios from 'axios';

// Get Authorization Header
const getAuthHeader = () => {
  return { Authorization: `Bearer ${localStorage.getItem('token')}` };
};


// Task Services

const API_URL = 'http://localhost:5002/api/tasks';

// export const getTasksByUser = async () => {
//     const response = await axios.get(`${API_URL}/user/:userId`, getAuthHeader());
//     return response.data;
//   };
  
export const getTasksByUser = async () => {
  const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
  if (!userId) {
    throw new Error('User ID not found. Are you logged in?');
  }

  const response = await axios.get(`${API_URL}/user/${userId}`, getAuthHeader());
  return response.data;
};

  export const createTask = async (data) => {
    const response = await axios.post(`${API_URL}/`, data, getAuthHeader());
    return response.data;
  };
  
  export const deleteTask = async (taskId) => {
    const response = await axios.delete(`${API_URL}/${taskId}`, getAuthHeader());
    return response.data;
  };