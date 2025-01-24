import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import TaskForm from '../components/TaskForm';
import { useTaskContext } from '../context/TaskContext';

const PageContainer = styled.div`
  padding: 20px;
`;

const EditTaskPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const { dispatch, tasks } = useTaskContext();
  const [taskStatus, setTaskStatus] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch the task from local storage (replace this with your actual logic)
    const taskToEdit = tasks.find((task) => task.id === parseInt(id, 10));
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
      setTaskStatus(taskToEdit.status);
    } else {
      toast.error('Task not found!');
      navigate('/'); // Redirect to Task List if task is not found
    }
  }, [id, navigate]);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    if (title.trim()) {
      // Update the task in local storage or state (replace this with your actual logic)
      //   updateTask(title, description, parseInt(id, 10));
      dispatch({
        type: 'EDIT_TASK',
        payload: {
          id: parseInt(id, 10),
          title: title.trim(),
          description: description.trim(),
          status: taskStatus,
        },
      });
      toast.success('Task updated successfully!');
      navigate('/'); // Navigate back to Task List Page
    } else {
      toast.error('Task title cannot be empty!');
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSelectStatus = (newStatus) => {
    setTaskStatus(newStatus);
    setIsDropdownOpen(false);
  };

  return (
    <PageContainer>
      <TaskForm
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        onSubmit={handleUpdateTask}
        type="edit"
        onCancel={() => navigate('/')}
        status={taskStatus}
        toggleDropdown={toggleDropdown}
        isDropdownOpen={isDropdownOpen}
        handleSelectStatus={handleSelectStatus}
      />
    </PageContainer>
  );
};

export default EditTaskPage;
