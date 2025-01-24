import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import TaskListPage from '../pages/TaskListPage';
import AddTaskPage from '../pages/AddTaskPage';
import EditTaskPage from '../pages/EditTaskPage';
import Error from '../pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />, // Common layout with header
    errorElement: <Error />,
    children: [
      {
        index: true, // Default route for the layout
        element: <TaskListPage />,
      },
      {
        path: 'add-task',
        element: <AddTaskPage />,
      },
      {
        path: 'edit-task/:id',
        element: <EditTaskPage />,
      },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
