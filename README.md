README: Task Management Application

Overview
This is a robust task management application built with Nuxt 3 on the frontend and a backend powered by Node.js, NestJS, and MongoDB. The application provides features to create, read, update, and delete tasks, integrating a well-structured API for data management.

Features
- Task listing with a detailed view
- Create, update, and delete tasks
- State management with Pinia
- API integration for data handling
- Bootstrap and vue3-toastify for UI and notifications
- Comprehensive unit tests with Vitest

Installation and Running the Application

 Frontend

1. Clone the repository:
   ```bash
   git clone https://github.com/marquis-code/Spin-Request-Frontent-Technical-Assessment-Test.git
   cd Spin-Request-Frontent-Technical-Assessment-Test
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   yarn run dev
   ```

4. Build for production:
   ```bash
   yarn run build
   yarn run start
   ```

 Backend

1. Navigate to the backend directory:
   ```bash
   git clone https://github.com/marquis-code/spin-request-todo-list-backend.git
   cd spin-request-todo-list-backend
   ```

2. **Install dependencies:
   ```bash
   yarn install
   ```

3. Configure environment variables:
   Create a `.env` file in the backend directory with the following:
   ```env
   MONGODB_URI=your-mongodb-uri
   PORT=your-port
   ```

4. Run the backend server:**
   ```bash
   npm run start:dev
   ```

API Endpoints

- Create Task: POST `tasks`
- Get All Tasks: GET `tasks`
- Get Single Task: GET `/tasks/:id`
- Update Task: PUT `/tasks/:id`
- Delete Task: DELETE `/tasks/:id`

Frontend Structure

- apiFactory: Centralized API request handling.
- Components:
  - `TaskTableList`: Renders tasks table.
  - `TaskTableRow`: Renders each task row.
  - `CreateTask`: Form for creating a task.
  - `EditTask`: Form for editing a task.
  - `TaskDetails`: Displays task details.
    
- Composables:
  - `createTask`: Logic to create a task.
  - `fetchTaskById`: Logic to fetch a task by ID.
  - `deleteTask`: Logic to delete a task by ID.
  - `fetchTasks`: Logic to fetch all tasks.
  - `updateTask`: Logic to update a task
  
- Interfaces: Define data structures and types.
  
- Pages:
  - `Index`: Lists all tasks.
  - `NotFound`: Catch-all for non-existent routes.
  - `Create Task`: Handles task creation.
  - `Task Details`: Displays task details.
  - `Edit Task`: Handles task editing.
    
- Plugins: Bootstrap and vue3-toastify for UI enhancements.

- Store: Pinia for state management.
  
- Tests: Vitest for unit testing.

Running Tests

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Run the tests:
   ```bash
   yarn run test
   ```

---

Implementation Choices and Justifications

1. apiFactory Pattern:
   - Reason: Centralizes API request handling, ensuring consistency and maintainability across the application. This pattern simplifies the management of API endpoints and configurations, reducing redundancy and potential errors.

2. Component-Based Architecture:
   - Reason: Breaks down the application into reusable, isolated components. This promotes separation of concerns, making the codebase more manageable and scalable. Components such as `TaskTableList` and `CreateTask` can be independently developed, tested, and maintained.

3. Composables:
   - Reason: Encapsulates logic and state management outside of components, enhancing code reuse and readability. By using composables like `createTask` and `fetchTasks`, the application adheres to the DRY (Don't Repeat Yourself) principle.

4. Interfaces:
   - Reason: Defines strict contracts for data structures, ensuring type safety and data consistency. This is crucial for maintaining a robust and error-free codebase, especially when dealing with complex data interactions.

5. Pinia Store:
   - Reason: Provides a centralized state management solution, making it easier to manage and share state across components. This improves the application's responsiveness and user experience by efficiently handling state changes.

6. Backend Integration:
   - Reason: Enhances the robustness of the application by providing a fully functional backend. This integration ensures that the application can handle real-world data management scenarios, demonstrating the capability to build full-stack solutions.

7. Testing with Vitest:
   - Reason: Ensures the reliability and correctness of the application through comprehensive unit tests. This practice showcases a commitment to quality and robustness, essential for production-grade applications.

8. UI Enhancements with Bootstrap and vue3-toastify:**
   - Reason: Improves the user interface and experience by leveraging pre-built styles and components. Toast notifications enhance user feedback, making the application more interactive and user-friendly.

By making these choices, I aimed to build a scalable, maintainable, and robust task management application.

Projet Source code: https://github.com/marquis-code/Spin-Request-Frontent-Technical-Assessment-Test
