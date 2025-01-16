// Task Services

const apiUrl = 'http://localhost:5002/api/users';

export const getTasksByUser = async () => {
    const response = await axios.get(`${API_URL}/tasks`, getAuthHeader());
    return response.data;
  };
  
  export const createTask = async (data) => {
    const response = await axios.post(`${API_URL}/tasks`, data, getAuthHeader());
    return response.data;
  };
  
  export const deleteTask = async (taskId) => {
    const response = await axios.delete(`${API_URL}/tasks/${taskId}`, getAuthHeader());
    return response.data;
  };