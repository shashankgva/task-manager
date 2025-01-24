import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';

const AppLayout = () => {
  const location = useLocation();

  // Dynamically set the header title and back button visibility based on the route
  let title = 'TO-DO APP';
  let showBackButton = false;

  if (location.pathname === '/add-task') {
    title = 'Add Task';
    showBackButton = true;
  } else if (location.pathname.startsWith('/edit-task')) {
    title = 'Edit Task';
    showBackButton = true;
  }

  return (
    <div>
      <Header title={title} showBackButton={showBackButton} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
