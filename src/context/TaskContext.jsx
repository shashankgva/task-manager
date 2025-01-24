import React, { createContext, useContext, useReducer } from 'react';

// Initial State
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

// Reducer Function
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return { ...state, tasks: newTasks };

    case 'EDIT_TASK':
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      return { ...state, tasks: updatedTasks };

    case 'DELETE_TASK':
      const filteredTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem('tasks', JSON.stringify(filteredTasks));
      return { ...state, tasks: filteredTasks };

    default:
      return state;
  }
};

// Create Context
const TaskContext = createContext();

// Custom Hook to use TaskContext
export const useTaskContext = () => {
  return useContext(TaskContext);
};

// TaskProvider Component
export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ tasks: state.tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
