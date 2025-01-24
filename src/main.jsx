import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { TaskProvider } from './context/TaskContext';
import { GlobalStyles } from './assets/styles/globalStyles';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <GlobalStyles />
      <App />
    </TaskProvider>
  </StrictMode>
);
