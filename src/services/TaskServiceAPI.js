import axios from 'axios';

// Get Authorization Header
const getAuthHeader = () => {
  return { Authorization: `Bearer ${localStorage.getItem('token')}` };
};


// Task Services

const API_URL = 'http://localhost:5002/api/tasks';

  
  export const getTasksByUser = async () => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
    if (!userId) {
      throw new Error('User ID not found. Are you logged in?');
    }

    const response = await axios.get(`${API_URL}/user/${userId}`, getAuthHeader());
    return response.data;
  };

  // export const createTask = async (data) => {

  //   const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
  //   if (!userId) {
  //     throw new Error('User ID not found. Are you logged in?');
  //   }
  //     const response = await axios.post(`${API_URL}`, data, getAuthHeader());
  //     return response.data;
  // };
  
  export const createTask = async (data) => {
    const userId = localStorage.getItem('userId'); // Retrieve userId from localStorage
    if (!userId) {
      throw new Error('User ID not found. Are you logged in?');
    }
  
    // Add userId to the task data
    const taskData = { ...data, userId };
  
    const response = await axios.post(`${API_URL}`, taskData, getAuthHeader());
    return response.data;
  };

  export const deleteTask = async (taskId) => {
    const response = await axios.delete(`${API_URL}/${taskId}`, getAuthHeader());
    return response.data;
  };

  // export const updateTask = async ({ taskId, title, description }) => {
  //   const userId = localStorage.getItem('taskId'); // Retrieve userId from localStorage
  //   if (!userId) {
  //     throw new Error('User ID not found. Are you logged in?');
  //   }
  
  //   const response = await axios.put(`${API_URL}/${taskId}`, { title, description, userId }, getAuthHeader());
  //   return response.data;
  // };

  export const updateTask = async (taskId, data) => {
    if (!taskId) throw new Error('Task ID is required to update task');
    const response = await axios.put(`${API_URL}/tasks/${taskId}`, data, getAuthHeader());
    return response.data;
  };
  

  // export const getTaskById = async (taskId) => {
  //   if (!taskId) {
  //     throw new Error('Task ID is required to fetch task details.');
  //   }
  
  //   const response = await axios.get(`${API_URL}/${taskId}`, getAuthHeader());
  //   return response.data;
  // };
  
  export const getTaskById = async (taskId) => {
    if (!taskId) throw new Error('Task ID is required to fetch the task');
    try {
      const response = await axios.get(`${API_URL}/${taskId}`, getAuthHeader());
      return response.data;
    } catch (error) {
      console.error('Error fetching task by ID:', error.message);
      throw error; // Rethrow to handle it in the component
    }
  };
  