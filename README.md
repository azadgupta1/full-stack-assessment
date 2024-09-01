
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

### 4. Node.js Server

The `backend` folder contains a Node.js server set up with Express.js. This server listens for requests and sends appropriate responses, such as returning JSON data.

### 5. Middleware

A middleware function is implemented to log incoming requests. This helps with monitoring and debugging the server by providing detailed information about the requests being processed.

### 6. Database Interaction

The Node.js server is connected to a PostgreSQL database. A table is created to store user information, and basic CRUD operations (Create, Read, Update, Delete) are implemented to manage this data.

## Database (PostgreSQL)

### 7. Database Schema

The database is structured like a simple blogging platform. It includes tables for users, posts, and comments, with relationships defined between these entities.

### 8. SQL Queries

SQL queries are written to retrieve posts by specific users and count the number of comments on each post. This shows the ability to work with relational data using SQL.

## Additional Challenge: Authentication

### 9. Authentication (Incomplete)

The project includes an attempt to implement user authentication using Passport.js. The goal was to secure certain API endpoints so that only authenticated users could access them. However, due to some challenges in setting up and debugging the authentication process, this part of the project remains incomplete.

- **Challenges Faced:** During the implementation, issues were encountered with configuring Passport.js and handling user sessions. Despite multiple attempts to troubleshoot and resolve these issues, a fully functional authentication system could not be achieved.

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
