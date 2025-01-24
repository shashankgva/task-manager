import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../context/TaskContext';
import { toast } from 'react-toastify';
import { formatDate } from '../utils/common';

const AddTaskPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();
  const { dispatch } = useTaskContext();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        id: Date.now(),
        title: title.trim(),
        description: description.trim(),
        status: 'Pending',
        createdAt: formatDate(new Date()),
      };
      dispatch({ type: 'ADD_TASK', payload: newTask });
      setTitle('');
      setDescription('');
      toast.success('Task added successfully!');
      navigate('/');
    } else {
      toast.error('Task title cannot be empty!');
    }
  };

  return (
    <TaskForm
      title={title}
      description={description}
      setTitle={setTitle}
      setDescription={setDescription}
      onSubmit={handleAddTask}
    />
  );
};

export default AddTaskPage;
