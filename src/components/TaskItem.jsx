import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTaskContext } from '../context/TaskContext';
import EditIcon from '../assets/images/edit.svg';
import DeleteIcon from '../assets/images/Trash.svg';

import {
  TaskContainer,
  TaskAvatar,
  TaskDetails,
  TaskTitle,
  TaskDescription,
  TaskDate,
  StatusIndicator,
  TaskActions,
  ActionButton,
} from '../assets/wrappers/TaskItemWrapper';

const TaskItem = ({ task }) => {
  const navigate = useNavigate();
  const { dispatch } = useTaskContext();

  const deleteTaskHandler = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      dispatch({ type: 'DELETE_TASK', payload: task.id });
      toast.success('Task deleted successfully!');
    }
  };

  return (
    <TaskContainer>
      <TaskAvatar>{task.title.charAt(0).toUpperCase()}</TaskAvatar>
      <TaskDetails>
        <TaskTitle>{task.title}</TaskTitle>
        <TaskDescription>{task.description}</TaskDescription>
        <TaskDate>{task.createdAt}</TaskDate>
      </TaskDetails>
      <StatusIndicator status={task.status}>{task.status}</StatusIndicator>
      <TaskActions className="task-actions">
        <ActionButton
          src={EditIcon}
          alt="Edit Task"
          onClick={() => navigate(`/edit-task/${task.id}`)}
        />

        <ActionButton
          src={DeleteIcon}
          alt="Delete Task"
          onClick={deleteTaskHandler}
        />
      </TaskActions>
    </TaskContainer>
  );
};

export default TaskItem;
