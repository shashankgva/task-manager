import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TaskList from '../components/TaskList';
import { useTaskContext } from '../context/TaskContext';
import SearchIcon from '../assets/images/search.svg';
import {
  PageContainer,
  FloatingButton,
  SearchBarContainer,
  SearchInput,
} from '../assets/wrappers/TaskListPageWrapper';

const TaskListPage = () => {
  const navigate = useNavigate();
  const { tasks } = useTaskContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    setFilteredTasks(
      tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          task.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, tasks]);

  return (
    <PageContainer>
      <SearchBarContainer>
        <SearchInput
          type="text"
          placeholder="Search To-Do"
          value={searchQuery}
          onChange={handleSearch}
        />
        <img src={SearchIcon} alt="search" />
      </SearchBarContainer>
      <TaskList tasks={filteredTasks} />
      <FloatingButton onClick={() => navigate('/add-task')}>+</FloatingButton>
    </PageContainer>
  );
};

export default TaskListPage;
