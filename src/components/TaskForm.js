import React, { useState } from 'react'; 
import { createTask } from '../services/TaskServiceAPI';

const TaskForm = ({ refreshTasks }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTask = async (e) => {
    e.preventDefault();
    try {
      // Pass title and description to createTask, no need to handle userId here
      await createTask({ title, description });
      setTitle('');
      setDescription('');
      refreshTasks();
    } catch (error) {
      console.error('Failed to create task:', error);
    }
  };

  return (
    <form onSubmit={handleCreateTask} className="form">
      <h2>Add New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
