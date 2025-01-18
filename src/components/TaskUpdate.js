import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTaskById, updateTask } from '../services/TaskServiceAPI';

const TaskUpdate = () => {
  const { taskId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const task = await getTaskById(taskId); // Fetch the task using the taskId
        setTitle(task.title);
        setDescription(task.description);
      } catch (error) {
        console.error('Failed to fetch task:', error);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleUpdateTask = async (e) => {
    e.preventDefault();
    try {
      await updateTask(taskId, { title, description });
      alert('Task updated successfully');
    } catch (error) {
      console.error('Failed to update task:', error);
    }
  };

  return (
    <form onSubmit={handleUpdateTask}>
      <h2>Update Task</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <button type="submit">Update Task</button>
    </form>
  );
};

export default TaskUpdate;
