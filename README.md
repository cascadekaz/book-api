# 📚 Book API Server

A simple RESTful API built with **Node.js**, **Express**, and **MongoDB** to manage books. Includes an optional static HTML frontend to test functionality.

---

## ✅ APIs Created and Their Functionality

| Method | Endpoint            | Functionality                    |
|--------|---------------------|----------------------------------|
| GET    | `/api/books`        | Retrieve all books               |
| GET    | `/api/books/:id`    | Retrieve a single book by ID     |
| POST   | `/api/books`        | Add a new book                   |
| PUT    | `/api/books/:id`    | Update a book by ID              |
| DELETE | `/api/books/:id`    | Delete a book by ID              |

---

## 🗄️ Database Used

- **MongoDB** (hosted via [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Integrated using the **Mongoose** ODM (Object Data Modeling) library

## Features
- 5 API Endpoints (CRUD)
- MongoDB database integration
- Optional frontend to test API

## Running Locally

```bash
git clone https://github.com/yourusername/book-api
cd book-api
npm install
cp .env.example .env # add your MONGO_URI
npm run dev
```

## 📬 How to Interact With the API

### 🔸 Create a Book

```bash
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title": "The Hobbit", "author": "J.R.R. Tolkien"}'
```
### 🔸 Get All Books
```bash
curl http://localhost:5000/api/books
```
### 🔸 Get a Single Book
```bash
curl http://localhost:5000/api/books/<bookId>
```
### 🔸 Update a Book
```bash
curl -X PUT http://localhost:5000/api/books/<bookId> \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Title", "author": "Updated Author"}'
```
### 🔸 Delete a Book
```bash
curl -X DELETE http://localhost:5000/api/books/<bookId>
```