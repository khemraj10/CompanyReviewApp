# Company Review & Rating Platform

A full-stack MERN application for managing company profiles and reviews with authentication, search, filters, sorting, ratings, and responsive UI.

---

# Tech Stack

## Frontend
- React.js
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# Features

## Authentication
- User Registration
- User Login
- JWT Authentication
- Protected APIs

## Company Features
- Add Company
- Company Listing
- Search Companies
- Filter Companies by City
- Sort Companies
- Responsive UI

## Review Features
- Add Review
- Review Listing
- Sort Reviews
- Average Rating Calculation
- Like Reviews
- Share Reviews

## Additional Features
- Debounced Search
- Pagination
- Reusable Components
- Layered Backend Architecture
- Feature-Based Frontend Architecture
- Loading & Error Handling

---

# Project Architecture

# Frontend Architecture

```txt
frontend/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
```

---

# Backend Architecture

```txt
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   ├── app.js
│   └── server.js
```

---

# API Endpoints

# Authentication APIs

## Register User

```http
POST /api/auth/register
```

### Request Body

```json
{
  "name": "Khemraj",
  "email": "khemraj@gmail.com",
  "password": "123456"
}
```

---

## Login User

```http
POST /api/auth/login
```

### Request Body

```json
{
  "email": "khemraj@gmail.com",
  "password": "123456"
}
```

---

# Company APIs

## Add Company

```http
POST /api/companies
```

### Request Body

```json
{
  "name": "Google",
  "logo": "https://logo.clearbit.com/google.com",
  "foundedOn": "2000-01-01",
  "city": "Bangalore",
  "address": "MG Road Bangalore"
}
```

---

## Get Companies

```http
GET /api/companies
```

### Query Params

```txt
?search=google
?city=bangalore
?sort=rating
?page=1
&limit=6
```

---

# Review APIs

## Add Review

```http
POST /api/reviews/:companyId
```

### Request Body

```json
{
  "fullName": "Khemraj",
  "subject": "Amazing Company",
  "reviewText": "Very good experience",
  "rating": 4.5
}
```

---

## Get Reviews

```http
GET /api/reviews/:companyId
```

### Query Params

```txt
?sort=rating
?sort=date
```

---

# Installation Guide

# Clone Repository

```bash
git clone <repository-url>
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

# Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

# Environment Variables

Create `.env` file inside backend folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
```

---

# MongoDB Aggregation

Average company rating is dynamically calculated using MongoDB aggregation pipeline.

```js
averageRating = totalRatings / totalReviews;
```

---

# Frontend Highlights

- Reusable UI Components
- Feature-Based Architecture
- Debounced Search
- Responsive Layout
- API Service Layer
- Clean State Management

---

# Backend Highlights

- Layered Architecture
- JWT Authentication
- Repository Pattern
- Aggregation Pipelines
- Search & Filter APIs
- Pagination Support

---

# Future Improvements

- React Query
- Redux Toolkit
- Cloudinary Image Upload
- Admin Dashboard
- Dark Mode
- Email Verification
- Forgot Password
- Optimistic UI Updates
- Unit Testing

---

# Author

Khemraj Gupta

Full Stack MERN Developer
