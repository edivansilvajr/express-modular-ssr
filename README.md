# Express Modular SSR Template

A modular SSR starter template built with Node.js, Express, EJS, PostgreSQL and session-based authentication.

This project was created to provide a clean and scalable foundation for:

- SaaS applications
- Admin dashboards
- Internal systems
- CRUD applications
- SSR projects with Express
- Authentication-based applications

The architecture focuses on simplicity, modularity and maintainability without unnecessary abstractions.

---

# Stack

- Node.js
- Express 5
- EJS
- PostgreSQL
- express-session
- connect-flash-now
- bcrypt
- multer
- method-override
- dotenv
- nodemon

---

# Features

- Modular architecture
- Server-side rendering (SSR)
- Session authentication
- Flash messages
- Global middleware support
- Error middleware
- PostgreSQL connection layer
- Basic validation middleware structure
- RESTful routing support with method-override
- File upload support with multer
- Environment variable support
- Repository-ready architecture

---

# Project Structure

```txt
src/
├── app.js
├── server.js
│
├── config/
│   └── env.js
│
├── database/
│   ├── connection.js
│   ├── sync.js
│   ├── migrations/
│   └── seeds/
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── flash.middleware.js
│
├── modules/
│   ├── auth/
│   │   ├── auth.controller.js
│   │   ├── auth.routes.js
│   │   └── auth.validation.js
│   │
│   └── dashboard/
│       ├── dashboard.controller.js
│       └── dashboard.routes.js
│
├── routes/
│   └── index.js
│
├── views/
│   ├── partials/
│   ├── dashboard.ejs
│   ├── error.ejs
│   ├── index.ejs
│   └── login.ejs
│
├── utils/
│
└── public/
    ├── assets/
    └── uploads/
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/edivansilvajr/express-modular-template.git
```

Enter the project folder:

```bash
cd express-modular-template
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file based on `.env-example`:

```env
DATABASE_URL=postgres://user:password@localhost:5432/database
PORT=3000
SESSION_SECRET=your-secret-key
NODE_ENV=development
```

---

# Available Scripts

Run development server:

```bash
npm run dev
```

Run production server:

```bash
npm start
```

Run database sync:

```bash
npm run db:sync
```

Generate secure session secret:

```bash
npm run gen:secret
```

---

# Authentication Flow

The project already includes a simple authentication structure using:

- express-session
- flash messages
- auth middleware
- validation middleware

Current flow:

```txt
Request
  ↓
Routes
  ↓
Validation Middleware
  ↓
Controller
  ↓
Repository (future expansion)
  ↓
Database
```

---

# Validation Layer

Validation is separated into middleware files:

```txt
auth.validation.js
```

This keeps controllers cleaner and separates:

- Request validation
- Business logic
- HTTP flow

---

# Repository Pattern

The template is prepared for repository-based architecture.

Example future structure:

```txt
modules/
└── users/
    ├── user.controller.js
    ├── user.routes.js
    ├── user.validation.js
    ├── user.repository.js
    └── user.service.js
```

The `repository` layer is responsible for database communication.

---

# File Uploads

Multer is already included for handling uploads.

Recommended folder:

```txt
public/uploads/
```

---

# Flash Messages

Flash messages are globally available in EJS views through middleware:

```js
res.locals.success
res.locals.warning
res.locals.error
res.locals.info
```

Example in EJS:

```ejs
<% if (warning.length > 0) { %>
    <p><%= warning[0] %></p>
<% } %>
```

---

# Recommended Future Improvements

- User CRUD module
- Repository layer
- Service layer
- Password hashing with bcrypt
- Role-based authorization
- CSRF protection
- Input validation libraries
- Logging system
- Docker support
- Testing setup

---

# Philosophy

This template intentionally avoids overengineering.

The goal is to provide:

- clean architecture
- modular organization
- fast development
- easy scalability
- SSR simplicity

without turning the project into an unnecessarily complex framework.

---

# License

ISC

