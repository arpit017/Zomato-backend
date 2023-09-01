# Zomato Clone Backend

This is the backend for a Zomato clone application, built using Express.js, Mongoose, bcrypt, and JWT for user authentication and managing restaurant data.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (recommended version 14.x or higher)
- MongoDB installed and running
- npm or yarn installed
- Postman or a similar tool for testing API endpoints

## Getting Started

1. Clone this repository:

```bash
git clone <repository-url>
cd zomato-clone-backend
```

2. Install dependencies:
```
npm install
```
  Create a .env file in the root directory based on the provided .env.example and configure your environment variables.
  
3. Start the server
```
npm start
```
  The server will be running at http://localhost:8080

## Project Structure
The project structure is organized as follows:

- config/: Configuration files for database, JWT, and other settings.
- controllers/: Controllers for handling various API endpoints.
- models/: Mongoose models for defining database schemas.
- routes/: Express routes for defining API endpoints.
- middlewares/: Custom middleware functions.
- utils/: Utility functions.
- index.js: Entry point of the application.
- Authentication
- This backend uses JSON Web Tokens (JWT) for user authentication. When a user logs in, a JWT token is generated and returned. This token should be included in the Authorization header of subsequent requests to protected routes for user authentication.

## API Endpoints
The following API endpoints are available:

- /api/auth/register: User registration
- /api/auth/login: User login
- /api/auth/logout: User logout
- /api/restaurants: Create, Read, Update, and Delete restaurant data
- /api/reviews: Create, Read, Update, and Delete restaurant reviews
- /api/users/profile: Get user profile information
For detailed information about the endpoints and how to use them, refer to the API documentation or Postman collection.

## Environment Variables
- Make sure to configure the following environment variables in your .env file:

- PORT: Port on which the server should run (default: 3000).
- MONGODB_URI: MongoDB connection URL.
- JWT_SECRET: Secret key for JWT token generation.
- Other application-specific variables.
