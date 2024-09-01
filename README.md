# Full-Stack Web Application

## Overview

This project is a simple web application that showcases basic skills in building web apps with React.js, Next.js, Node.js, and PostgreSQL. The app includes both frontend and backend components and demonstrates key concepts like API integration, middleware, database interaction, and authentication.

## Project Structure

- **frontend**: Contains the React.js and Next.js parts of the application.
- **backend**: Contains the Node.js server with Express.js and the PostgreSQL database setup.

## Frontend (React.js and Next.js)

### 1. React.js Basics

In the `frontend` folder, there is a simple React component that displays a list of items (a to-do list). You can add new items to the list. It uses state and props to manage the list dynamically.

### 2. Next.js Routing

The `frontend` folder also includes a Next.js application with at least two pages. You can navigate between these pages using client-side routing.

### 3. API Integration

The Next.js app integrates with a mock API endpoint using JSON server. Data is fetched from the API and displayed on a page to show how the frontend interacts with the backend.

## Backend (Node.js)

### 4. Node.js Server

In the `backend` folder, a basic Node.js server is set up using Express.js. It has an API endpoint that returns a JSON response.

### 5. Middleware

A middleware function is added to log information about incoming requests. This helps with debugging and monitoring the server.

### 6. Database Interaction

The Node.js server is connected to a PostgreSQL database. A table for storing user information is created, and CRUD operations (Create, Read, Update, Delete) are implemented.

## Database (PostgreSQL)

### 7. Database Schema

The database schema is designed for a simple blogging platform. It includes tables for users, posts, and comments. The schema reflects the relationships between these entities.

### 8. SQL Queries

SQL queries are written to retrieve posts by a specific user and to count comments on a post. This demonstrates the ability to access and manipulate data in the database.

## Additional Challenge: Authentication

### 9. Authentication

User authentication is implemented in the Node.js application using Passport.js. Only authenticated users can access specific API endpoints, showing knowledge of secure authentication practices.

## How to Run

1. **Frontend**:
   - Go to the `frontend` folder.
   - Run `npm install` to install dependencies.
   - Run `npm run dev` to start the development server.

2. **Backend**:
   - Go to the `backend` folder.
   - Run `npm install` to install dependencies.
   - Set up the PostgreSQL database and run migrations if needed.
   - Run `npm start` to start the server.

## Notes

- Make sure to have PostgreSQL installed and running on your local machine.
- Ensure environment variables are set up correctly for database connection and other configurations.

## Summary

This project includes a basic React.js and Next.js frontend, a Node.js backend with Express.js, and a PostgreSQL database. The project covers API integration, middleware implementation, and user authentication. The goal is to showcase the ability to build a full-stack web application with these technologies.

Feel free to explore the code and make changes as needed!

---

Happy coding!

