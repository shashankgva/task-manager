# **Task Management Application**

This is a simple task management application built with **React**, **styled-components**, and **React Router DOM**. It allows users to manage tasks by adding, editing, deleting, and filtering tasks based on their status. The application also includes a search feature to find tasks by their title or description.

---

## **Features**

- **Add Task**: Users can create tasks with a title, description, status, and automatically store the creation date.
- **Edit Task**: Edit an existing task’s details and status.
- **Delete Task**: Delete a task from the list.
- **Search Tasks**: Search tasks by their title or description.
- **Task Status Management**: Tasks can have statuses (`Pending`, `In Progress`, `Completed`) with a dropdown for selection.
- **Dynamic Filtering**: Tasks are displayed in an accordion view grouped by their statuses.
- **Responsive Design**: Optimized for various screen sizes.
- **Google Font Integration**: Uses the **Jost** font family for a modern look.
- **LocalStorage Persistence**: Tasks are stored in localStorage, so they persist between sessions.

---

## **Tech Stack**

- **React**: Frontend framework for building user interfaces.
- **Styled-Components**: For CSS-in-JS styling.
- **React Router DOM**: For SPA navigation and routing.
- **React Context API with useReducer**: For global state management.
- **React-Toastify**: For notifications.
- **Jost Font**: Integrated via Google Fonts.

---

## **Getting Started**

Follow these instructions to set up and run the project locally.

### **Prerequisites**

Ensure you have the following installed:

- **Node.js** (>= 14.x)
- **npm** or **yarn**

### **Installation**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/task-management-app.git
   cd task-management-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the app in your browser: Navigate to http://localhost:5173 (or the port specified in your terminal).

### **Folder Structure**

src/
├── components/ # Reusable components
│ ├── AddTaskForm.jsx # Form for adding or editing tasks
│ ├── Header.jsx # Common header
│ ├── TaskItem.jsx # Single task component
│ ├── TaskList.jsx # Displays grouped tasks
├── context/ # Global state management
│ └── TaskContext.jsx # Context and reducer for tasks
├── pages/ # Page-level components
│ ├── TaskListPage.jsx # Main task list page
│ ├── AddTaskPage.jsx # Add task page
│ ├── EditTaskPage.jsx # Edit task page
├── routes/ # SPA routing configuration
│ └── AppRoutes.jsx # Application routes with nested structure
├── styles/ # Global and component-level styles
│ └── GlobalStyles.js # Global CSS
├── App.jsx # Main application component
├── main.jsx # Application entry point

### **Design Decisions**

1. Context API for State Management
   The TaskContext uses useReducer for managing task-related actions (ADD_TASK, EDIT_TASK, DELETE_TASK). This ensures a centralized and scalable approach for managing application state.

2. Modular Component Design
   The app is built with reusable components like TaskItem, TaskList, and Header. This approach ensures maintainability and reusability across the app.

3. Styled-Components
   Used for scoped component styling.
   Ensures styles are modular and do not conflict globally.
   Provides a modern approach to dynamic styling (e.g., status-based color changes).
4. LocalStorage Integration
   Tasks are persisted in localStorage to ensure they remain even after the page is reloaded.
5. Responsive Design
   The app is designed to work seamlessly across different screen sizes.

### **Additional Features**

Search Tasks: Quickly find tasks by entering a keyword in the search bar.
Dynamic Status Colors: Each status (Pending, In Progress, Completed) is visually distinguished with colors.
Accordion for Task Groups: Tasks are grouped into collapsible sections based on their statuses.
Jost Font: A modern Google font for enhanced readability and design consistency.
Toast Notifications: Feedback is provided for user actions (e.g., task added, edited, or deleted).

### **How to Use**

Add a Task:

Navigate to the "Add Task" page using the floating + button.
Enter a title, description.
Click "Add Task" to save it.

Edit a Task:

Click the edit icon on a task to navigate to the "Edit Task" page.
Modify the details or status and click "Update" to save changes.

Delete a Task:

Click the delete icon on a task. A toast will confirm deletion.

Search for Tasks:

Use the search bar on the task list page to filter tasks by title or description.

View Tasks by Status:

Expand or collapse the accordion sections to view tasks grouped by their status.
