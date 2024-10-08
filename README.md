
# Full-Stack Web Application

## Overview

This project is a full-stack web application that demonstrates essential skills in building web apps using React.js, Next.js, Node.js, and PostgreSQL. It includes both frontend and backend components, showcasing key concepts like API integration, middleware, database interaction, and user authentication.

**Note:** The authentication part using Passport.js is currently incomplete due to challenges faced during implementation. Details are provided below.

## Project Structure

- **frontend**: Contains the React.js and Next.js components of the application.
- **backend**: Contains the Node.js server setup, including database interaction with PostgreSQL.

## Frontend (React.js and Next.js)

### 1. React.js Basics

The `frontend` folder includes a simple React component that displays a to-do list. Users can add new items to the list, which is dynamically updated. This part demonstrates the use of state and props in React.
Running process is added in the README.md file of reactjs-app

### 2. Next.js Routing

The `frontend` folder also includes a Next.js application with multiple pages. Users can navigate between these pages using client-side routing, allowing for smooth transitions without full-page reloads.

### 3. API Integration

The Next.js app integrates with a mock API (using JSON server) to fetch and display data on a page. This demonstrates how the frontend can interact with the backend to retrieve and display information.


### Instructions for Setting Up and Running the Project

#### 1. Set Up the Mock API

- **Install JSON Server**:
  Run the following command to install JSON Server globally:
  ```bash
  npm install -g json-server
  ```

- **Create a JSON File for Data**:
  Create a file named `db.json` with the following content:
  ```json
  {
    "posts": [
      {
        "id": 1,
        "title": "First Post",
        "content": "This is the content of the first post."
      },
      {
        "id": 2,
        "title": "Second Post",
        "content": "This is the content of the second post."
      }
    ]
  }
  
  ```

- **Start JSON Server**:
  Run the following command to start the mock API server on port `5002`:
  ```bash
  json-server --watch db.json --port 5002
  ```

#### 2. Implement in Your Next.js App

- **Add Code to Your Project**:
  Place the `PostsPage` component code in `app/posts/page.tsx` within your Next.js project.

#### 3. Run Your Next.js App

- **Start Next.js Development Server**:
  In your Next.js project directory, run:
  ```bash
  npm run dev
  ```

#### 4. View the Result

- **Open in Browser**:
  Navigate to `http://localhost:3000/posts` in your browser to see the posts displayed from your mock API.

---

These steps will set up the mock API, integrate it with your Next.js app, and run both servers for development.

## Backend (Node.js)

Here’s a more detailed explanation of each part, with instructions on how to use them:

---

### 4. Node.js Server

The `server` folder includes a Node.js server that uses Express.js to handle HTTP requests.Created an API endpoint
that returns a basic JSON response. Here’s how you can use and run it:

1. **Navigate to the Backend Directory**:
   Open your terminal and go to the `server` folder where your server code is located:
   ```bash
   cd server
   ```

2. **Install Dependencies**:
   Run the following command to install all the required npm packages:
   ```bash
   npm install
   ```

3. **Start the Server**:
   To start the server, use the following command:
   ```bash
   npm start
   ```
   The server will listen for incoming requests on a specified port (e.g., `http://localhost:5000`), returning JSON data or performing other actions based on the defined routes.

### 5. Middleware

Middleware functions in Express.js are used to process requests before they reach your route handlers. Here's how it's set up and used:

1. **Logging Middleware**:
   A middleware function is included to log details of each incoming request, such as the request method, URL, and timestamp. This helps in monitoring and debugging by providing a log of all requests handled by the server.

2. **Implementation**:
   The middleware is typically added in your `index.js`  file. It intercepts requests before they reach your route handlers and logs the information to the console or a log file.

   Example:
   ```javascript
   app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
   });
   ```

3. **Usage**:
   Once the server is running, every request made to the server will be logged according to the middleware's configuration.

### 6. Database Interaction

The Node.js server interacts with a PostgreSQL database to store and manage data. Here’s how to set it up and use it:

1. **Database Setup**:
   - **Install PostgreSQL**:
     Make sure PostgreSQL is installed and running on your machine.
   - **Create a Database**:
     Use a PostgreSQL client or command-line tool to create a database for your project.

2. **Configure Database Connection**:
   - **Database Configuration**:
     In your Node.js project, you need to configure the connection to your PostgreSQL database. This is usually done in a configuration file or environment variables.

   Example configuration:
   ```javascript
   const { Pool } = require('pg');
   const pool = new Pool({
     user: 'yourUsername',
     host: 'localhost',
     database: 'yourDatabaseName',
     password: 'yourPassword',
     port: 5432,
   });
   ```

3. **Implement CRUD Operations**:
   - **Create Table**:
     Write SQL queries to create tables in your PostgreSQL database for storing user information.

   - **Perform CRUD Operations**:
     Implement functions in your Node.js server to handle Create, Read, Update, and Delete operations.

## Database (PostgreSQL)

### 7. Database Schema

The database is structured like a simple blogging platform. It includes tables for users, posts, and comments, with relationships defined between these entities.
The structure of the blogging platform is given in the `database` folder.

### 8. SQL Queries

SQL queries are written to retrieve posts by specific users and count the number of comments on each post. This shows the ability to work with relational data using SQL.
Again the queries to retrieve data is given in the `database` folder.

## Additional Challenge: Authentication

### 9. Authentication (Incomplete)

The project includes an attempt to implement user authentication using Passport.js. The goal was to secure certain API endpoints so that only authenticated users could access them. However, due to some challenges in setting up and debugging the authentication process, this part of the project remains incomplete.

- **Challenges Faced:** During the implementation, issues were encountered with configuring Passport.js and handling user sessions. Despite multiple attempts to troubleshoot and resolve these issues, a fully functional authentication system could not be achieved.

`Cannot find module passport`



## How to Run

1. **Frontend**:
   - Navigate to the `frontend` folder.
   - Run `npm install` to install all dependencies.
   - Run `npm run dev` to start the development server and open the app in your browser.

2. **Backend**:
   - Navigate to the `backend` folder.
   - Run `npm install` to install all dependencies.
   - Set up PostgreSQL on your local machine and run any required database migrations.
   - Run `npm start` to start the server.

## Notes

- Ensure that PostgreSQL is installed and running on your computer.
- Double-check that environment variables for database connections and other configurations are correctly set up.

## Summary

This project provides a comprehensive example of a full-stack web application, covering frontend development with React.js and Next.js, backend development with Node.js and Express.js, and database interaction with PostgreSQL. While the project includes key concepts like API integration and middleware, it is important to note that the authentication feature using Passport.js is incomplete due to implementation challenges.

Feel free to explore the code, run the application, and modify it as needed!

---

🌿 Wishing you a smooth coding experience as you explore this project! 🌊
