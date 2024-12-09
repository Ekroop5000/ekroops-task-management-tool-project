# Ekroop's Task Management Tool Project

## Project Overview
Ekroop's Task Management Tool Project is a full-stack web application designed for effective task management. The tool provides users with a streamlined interface to manage tasks through creation, editing, filtering, and deletion functionalities. Users can set task priorities, sort by creation date or priority, and update statuses (Pending, In Progress, Completed). The project emphasizes RESTful API design, modular routing, middleware integration, and responsive UI components.

## Features
- **Task Creation**: Add new tasks with a title, description, priority, status, and due date.
- **Task Editing**: Modify existing tasks directly from the task display page.
- **Task Filtering and Sorting**: Filter tasks by status (Pending, In Progress, Completed) and sort by creation date or priority.
- **Task Deletion**: Delete tasks with a confirmation prompt.
- **UI Design**: Clean, responsive interface with interactive elements for a smooth user experience.
- **Notifications**: Alerts and prompts for task updates, filtering success, and task deletions.

## Technologies and Tools Used
- **Frontend**:
1. **HTML5**: Structure and semantic content for web pages.
2. **CSS3**: Styling and layout design.
3. **JavaScript (ES6)**: Client-side scripting and interactivity.
      - **Fetch API**: For asynchronous HTTP requests.
- **Backend**:
1. **Node.js**: Server-side runtime environment for JavaScript.
2. **Express.js**: Web application framework for creating RESTful APIs.
- **Database**:
1. **MongoDB**: NoSQL database for storing task data.
2. **Mongoose**: ODM (Object Data Modeling) library for MongoDB, defining schemas and managing data.
- **API Design**:
1. **RESTful API**: CRUD operations for tasks (Create, Read, Update, Delete).
      - **Endpoints for tasks**:
           - **/api/tasks (POST)**: Add new tasks.
           - **/api/tasks (GET)**: Retrieve tasks.
           - **/api/tasks/:id (PUT)**: Update tasks.
           - **/api/tasks/:id (DELETE)**: Remove tasks.
- **Additional Libraries**:
1. **dotenv**: Manage environment variables.
2. **Body-parser (or Express's built-in JSON middleware)**: Parse incoming JSON payloads.
- **Tools and Frameworks**:
1. **Visual Studio Code**: Code editor.
2. **Postman**: Testing API endpoints.
- **Deployment**:
1. **Localhost**: Application runs locally on a development server.
- **Other Features**:
1. **Task Filtering and Sorting**:
      - Filter tasks by status (Pending, In Progress, Completed).
      - Sort tasks by creation date or priority.
2. **Task Management**:
      - CRUD functionalities integrated with user-friendly forms and buttons.
3. **Priority and Status Management**:
      - Priority levels: High, Medium, Low.
      - Status progression: Pending → In Progress → Completed.
- **Other Enhancements**:
1. **Responsive Design**: To support desktop and mobile devices.

## Project Structure
ekroops-task-management-tool-project/
├── models/
│   └── Task.js                   # Task schema and model
├── node_modules/                 # Dependencies
├── public/
│   ├── task_creation.html        # Task creation page
│   ├── task_display.html         # Task display and editing page
├── routes/
│   └── taskRoutes.js             # API endpoints for task operations
├── .env                          # Environment variables (excluded from submission)
├── .gitignore                    # Specifies files to exclude from Git tracking
├── package-lock.json             # Ensures consistent dependencies
├── package.json                  # Project metadata and dependencies
└── server.js                     # Main server setup with Node.js and Express

## Setup Instructions
To set up and run the project locally, follow all of these steps:
### Make sure you are in the right Project Directory:
If you are not in the right Project Directory, which should be ekroops-task-management-tool-project, then you need to run the following command: cd ekroops-task-management-tool-project
### Clone the Repository:
Clone the Repository, by running the following command: git clone https://github.com/N01632322/ekroops-task-management-tool-project
### Install all of the Dependencies:
If you have to do so, you have to install all of the dependencies, which includes the "node_modules" folder that contains all of the contents, by running the following command: npm install
### Set Up Environment Variables:
If you have to do so, you will have to create a .env file in the project root, and then copy and paste the following MONGODB_URI inside the .env file: MONGODB_URI=mongodb+srv://ekroop2005:TX7m9QzjOQ7Vokro@cluster0.so6df.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0                                                    
                                                                                                                                                                                  The above MONGODB_URI is a connection string that specifies the path to my MongoDB database. It's used by the application to connect to the MongoDB database instance and is essential for enabling database operations.
### Start the server:
To start the server, run the following command in the right Project Directory, which should be ekroops-task-management-tool-project: nodemon server.js
### Access the Application:
Open a tab on your browser and navigate to http://localhost:5000 (which is the specified port in the server.js file) to start using the Task Management Tool Application by managing the tasks, such as creating, reading, updating, and deleting the tasks, and other sorts of things that are available to do on the Task Management Tool Application.

## Usage Guidelines
## 1. Navigating Between Pages:
- The task creation page allows users to enter new tasks with specific details.
- The task display page shows a list of tasks with filtering and sorting options.
## 2. Filtering and Sorting:
- Use the filter options on the task display page to sort tasks by priority or creation date and filter by task status.
- Click "Filter Your Tasks" to apply the chosen filters.
## 3. Editing and Deleting Tasks:
- Each task can be edited directly from the task display page.
- Click "Update Your Task" after editing, or "Delete Your Task" to remove a task permanently.
## 4. Notifications:
- Alert messages are provided for successful task updates, filtering confirmation, task deletion, going back to the "Task Management Tool Page", and going back to the "Filter Your Tasks & Your List Of Tasks Page".