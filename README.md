# 📝 Task Manager Pro

A fully containerized full‑stack Task Management application built with:

- **Spring Boot 3** — Backend REST API  
- **Angular 19** — Frontend UI  
- **MySQL 8** — Database  
- **Docker Compose** — Orchestration  

This project is designed for seamless setup and execution using Docker Desktop.

---

## 🚀 Running the Application

This project is fully containerized. All services — the Angular frontend, Spring Boot backend, and MySQL database — run through Docker Desktop without requiring any additional local installations.

### 1. Clone the Repository

```bash
git clone https://github.com/vihanga445/task-manager-app.git
cd task-manager-app
```

### 2. Start the System

Run the following command in the project root:

```bash
docker-compose up --build
```

Docker will automatically:

- Build the Angular frontend  
- Build the Spring Boot backend  
- Start the MySQL database  
- Create all required tables via Hibernate  

---

## 🌐 Access the Application

| Service | URL |
|--------|-----|
| **Frontend (Angular)** | http://localhost:4200 |
| **Backend API (Spring Boot)** | http://localhost:8091/api |

---

## 🗄️ Database Configuration

The MySQL database runs inside Docker, and Hibernate initializes all required tables (`users`, `tasks`) on first startup.

| Property | Value |
|---------|--------|
| **Engine** | MySQL 8.0 |
| **Database Name** | `task_manager` |
| **Internal Container Port** | 3306 |
| **Host Port** | 3307 |
| **Root Password** | `15403` |

### Optional: Connect via MySQL Workbench

```
Host: localhost
Port: 3307
User: root
Password: 15403
Database: task_manager
```

---

## 🔐 Authentication (JWT Security)

The system uses **JWT (JSON Web Tokens)** for secure, stateless authentication.

### Initial Setup

Since the database starts empty:

1. Open the **Signup** page  
2. Create a new account  
3. Log in using your credentials  

### Recommended Test Credentials

| Field | Value |
|-------|--------|
| **Username** | `alpha_tester_2026` |
| **Password** | `DockerTask` |

---

## 📦 Tech Stack

### **Backend**
- Java 17  
- Spring Boot 3  
- Spring Security (JWT)  
- Spring Data JPA  
- MySQL 8  
- Docker  

### **Frontend**
- Angular 19  
- TypeScript  
- Angular Material  
- JWT Interceptor  
- Docker  

---

## 🐳 Docker Architecture

```
task-manager-app/
│
├── backend/        # Spring Boot API
├── frontend/       # Angular UI
├── docker-compose.yml
└── README.md
```

Docker Compose runs:

- `task-manager-backend`  
- `task-manager-frontend`  
- `task-manager-db` (MySQL)

All services communicate through an internal Docker network.

---

## 📌 Features

### ✔ User Authentication
- Signup / Login  
- JWT-based authorization  
- Secure protected routes  

### ✔ Task Management
- Create, update, delete tasks  
- Mark tasks as completed  
- Filter tasks  
- Responsive UI  

### ✔ Fully Containerized
- No local dependencies  
- One command to run the entire system  

---

## 🖼️ Screenshots

### 🏠 Home Page
![Home Page](screenshots/home.png)

### 📝 Register Page
![Register Page](screenshots/register.png)

### 🔐 Login Page
![Login Page](screenshots/login.png)

### 📋 All Tasks Page
![All Tasks](screenshots/tasks.png)

### ➕ Add Task Page
![Add Task](screenshots/add-task.png)

### ✏️ Edit Task Page
![Edit Task](screenshots/edit-task.png)

### 📄 Task Details Page
![Task Details](screenshots/task-details.png)

### 🗑️ Delete Task Confirmation
![Delete Task](screenshots/delete-task.png)


