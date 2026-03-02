# 🚀 Job Portal Backend API -QuickHire

A production-ready RESTful API built with:

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose ODM
- JWT Authentication
- Role-Based Authorization

---

## 📌 Features

- 🔐 User Authentication (Register / Login)
- 👤 Role-Based Access Control (ADMIN / USER)
- 📂 Category Management
- 💼 Job Management
- 🛡 Protected Routes with JWT
- 🧠 Clean MVC Architecture
- ⚡ MongoDB with Mongoose

---

## 🏗 Project Structure

src/
│
├── app.ts
├── server.ts
│
├── config/
│   └── db.ts
│
├── modules/
│   ├── auth/
│   ├── user/
│   ├── category/
│   └── job/
│
├── middlewares/
│   ├── auth.middleware.ts
│   ├── authorize.middleware.ts
│   └── error.middleware.ts
│
└── utils/

---

## ⚙️ Environment Variables

Create a `.env` file:

 

---

## 📦 Installation

```bash
npm install
```

---

## ▶️ Run Project

Development mode:

```bash
npm run dev
```

Build & production:

```bash
npm run build
npm start
```

---

# 🗄 Database Connection (MongoDB)

Make sure MongoDB is running locally or use MongoDB Atlas.

 
 

---

# 🔐 Authentication Routes

Base URL: `/api/auth`

| Method | Route | Description |
|--------|-------|------------|
| POST | /register | Register new user |
| POST | /login | Login user |

---

# 📂 Category Routes

Base URL: `/api/categories`

| Method | Route | Access | Description |
|--------|--------|--------|------------|
| GET | / | Public | Get all categories |
| POST | / | ADMIN | Create category |
| DELETE | /:id | ADMIN | Delete category |

---

# 💼 Job Routes

Base URL: `/api/jobs`

| Method | Route | Access | Description |
|--------|--------|--------|------------|
| GET | / | Public | Get all jobs |
| GET | /:id | Public | Get single job |
| POST | / | ADMIN | Create job |
| PATCH | /:id | ADMIN | Update job |
| DELETE | /:id | ADMIN | Delete job |

---

# 🔐 Protected Route Usage

Add this header:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# 📊 API Response Format

Success:

```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

Error:

```json
{
  "success": false,
  "message": "Error message"
}
```

---

# 🏆 Best Practices Implemented

- MVC Architecture
- Centralized Error Handling
- JWT Authentication
- Role-Based Authorization
- Environment-based configuration
- Clean Folder Structure
- TypeScript type safety

---

# 👨‍💻 Author

Aminul Haque  
Full Stack Developer  
Next.js | Node.js | MongoDB | TypeScript