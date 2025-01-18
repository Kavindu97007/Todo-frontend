import React, { useEffect, useState } from 'react';
import { getTasksByUser, deleteTask } from '../services/TaskServiceAPI';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const fetchedTasks = await getTasksByUser();
      setTasks(fetchedTasks);
    } catch (error) {
      console.error('Failed to fetch tasks:', error);
    }
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteTask(taskId);
      fetchTasks(); // Refresh tasks after deletion
    } catch (error) {
      console.error('Failed to delete task:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    
    <div className="task-list">
    <div>
    <Link to="/taskform"><button>Add Task</button></Link>
    </div>
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div>
              <button onClick={() => handleDelete(task._id)}>Delete</button> <Link to="/updatetaskform"><button>Update</button></Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
