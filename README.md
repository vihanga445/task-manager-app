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

<img width="1907" height="911" alt="Screenshot 2026-03-20 203903" src="https://github.com/user-attachments/assets/32cd397c-4992-4eb6-90b6-d0ce173566e2" />

### 📝 Register Page


<img width="1914" height="906" alt="Screenshot 2026-03-20 203947" src="https://github.com/user-attachments/assets/54329c1e-9b6c-45f5-89c8-625c9ecf02d9" />

### 🔐 Login Page

<img width="1900" height="914" alt="Screenshot 2026-03-20 204019" src="https://github.com/user-attachments/assets/51246549-1d57-4a11-9d00-de1270354c29" />



### 📋 All Tasks Page


<img width="1895" height="916" alt="Screenshot 2026-03-20 204523" src="https://github.com/user-attachments/assets/4654ce15-5abe-486d-ac91-71071234d48a" />


### ➕ Add Task Page


<img width="1908" height="921" alt="Screenshot 2026-03-20 204511" src="https://github.com/user-attachments/assets/c428ee99-336c-4020-b0f7-ee8cb6537212" />


### ✏️ Edit Task Page

<img width="1903" height="899" alt="Screenshot 2026-03-20 204556" src="https://github.com/user-attachments/assets/243d7a41-3448-4a2a-932a-1b36806073df" />

### 📄 Task Details Page

<img width="1907" height="907" alt="Screenshot 2026-03-20 204543" src="https://github.com/user-attachments/assets/107a5b1e-4e0e-4f97-9099-556bd3e37c9e" />


### 🗑️ Delete Task Confirmation

<img width="1910" height="903" alt="Screenshot 2026-03-20 204614" src="https://github.com/user-attachments/assets/2480c84d-bbc6-45da-8553-cc93c1edf8c0" />



