# CRM Opportunity Tracker

A full-stack CRM Opportunity Tracking application developed as part of the CEOFactory Full Stack Developer Assignment.

## Tech Stack

### Frontend

* React
* Vite
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* bcryptjs

## Features

### Authentication

* User Registration
* User Login
* JWT Token Authentication
* Protected Routes

### Opportunity Management

* Create Opportunity
* View Opportunities
* Edit Opportunity
* Delete Opportunity

### Opportunity Fields

* Customer Name
* Contact Name
* Contact Email
* Contact Phone
* Requirement
* Estimated Value
* Stage
* Priority
* Next Follow Up Date
* Notes

### Security

* Password Hashing
* JWT Authentication
* Ownership-Based Access Control

## Installation

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

### Opportunities

```http
POST   /api/opportunities
GET    /api/opportunities
GET    /api/opportunities/:id
PUT    /api/opportunities/:id
DELETE /api/opportunities/:id
```

## Author

Moluguri Ram
