<div align="center">

# 🏛️ HallsHub

### A p latform for discovering, scheduling, and managing college halls and classrooms

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-Java_17-6DB33F?logo=springboot\&logoColor=white)](https://spring.io/projects/spring-boot)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb\&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

</div>

---

## 📖 Overview

**HallsHub** is a hall and classroom booking platform designed to simplify venue discovery and event scheduling.

The application allows users to create events, select dates, view available venues, and book suitable halls or classrooms. It provides a centralized system for managing venue availability and reducing scheduling conflicts within a college campus.

The project follows a separated frontend–backend architecture:

* **Frontend:** Next.js
* **Backend:** Spring Boot REST API
* **Database:** MongoDB
* **Authentication:** Spring Security and JWT

---

## ✨ Features

* Create and manage college events
* Search for halls and classrooms
* Select venues based on the chosen date
* View venue availability before booking
* Prevent conflicting venue reservations
* Secure authentication using JSON Web Tokens
* Responsive and modern user interface
* User notifications and feedback messages
* Separate frontend and backend services
* MongoDB-based persistent storage

---

## 🛠️ Tech Stack

### Frontend

* Next.js 14
* React 18
* JavaScript
* Material UI
* Tailwind CSS
* Styled Components
* Emotion
* React Toastify
* React Modal
* AOS animations
* React Responsive Carousel

### Backend

* Java 17
* Spring Boot
* Spring Web MVC
* Spring Data MongoDB
* Spring Security
* JWT authentication
* Maven

### Database

* MongoDB

---

## 🏗️ Architecture

```text
┌───────────────────────────────┐
│         Next.js Client        │
│                               │
│  Pages • Components • Forms   │
│  Material UI • Tailwind CSS   │
└───────────────┬───────────────┘
                │
                │ HTTP / REST API
                ▼
┌───────────────────────────────┐
│      Spring Boot Backend      │
│                               │
│ Controllers • Services        │
│ Security • JWT Validation     │
└───────────────┬───────────────┘
                │
                │ Spring Data
                ▼
┌───────────────────────────────┐
│            MongoDB            │
│                               │
│ Users • Events • Venues       │
│ Bookings • Availability       │
└───────────────────────────────┘
```

---

## 📁 Project Structure

```text
HallsHub-v2/
│
├── hallshub-frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── hallshubbackend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   └── resources/
│   │   └── test/
│   ├── pom.xml
│   ├── mvnw
│   └── mvnw.cmd
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Install the following before running the application:

* Node.js 18 or later
* npm
* Java 17
* Maven, or use the included Maven Wrapper
* MongoDB
* Git

---

## 1. Clone the Repository

```bash
git clone https://github.com/BharathVishnu/HallsHub-v2.git
cd HallsHub-v2
```

---

## 2. Configure MongoDB

Ensure MongoDB is running locally or create a MongoDB Atlas database.

Configure the backend connection in:

```text
hallshubbackend/src/main/resources/application.properties
```

Example configuration:

```properties
spring.data.mongodb.uri=mongodb://localhost:27017/hallshub
server.port=8080
```

For MongoDB Atlas:

```properties
spring.data.mongodb.uri=${MONGODB_URI}
server.port=8080
```

Do not commit production credentials or private database URLs to GitHub.

---

## 3. Run the Backend

### Windows

```bash
cd hallshubbackend
mvnw.cmd spring-boot:run
```

### Linux or macOS

```bash
cd hallshubbackend
./mvnw spring-boot:run
```

Alternatively, using an installed Maven version:

```bash
mvn spring-boot:run
```

The backend will typically be available at:

```text
http://localhost:8080
```

---

## 4. Run the Frontend

Open another terminal:

```bash
cd hallshub-frontend
npm install
npm run dev
```

The frontend will be available at:

```text
http://localhost:3000
```

---

## 🔐 Authentication

The backend includes dependencies for:

* Spring Security
* JWT generation
* JWT parsing and validation
* Protected API endpoints

A typical authentication flow is:

```text
User submits credentials
        │
        ▼
Backend validates the user
        │
        ▼
Backend generates a JWT
        │
        ▼
Frontend stores the token
        │
        ▼
Token is sent with protected API requests
        │
        ▼
Spring Security validates the request
```

Authenticated requests generally use the following header:

```http
Authorization: Bearer <your-jwt-token>
```

---

## 📌 Application Workflow

1. A user registers or logs into the application.
2. The user enters event information.
3. The user selects the required date.
4. The system retrieves venues available for that date.
5. The user selects a suitable hall or classroom.
6. The booking details are submitted to the backend.
7. The backend validates availability.
8. The confirmed booking is stored in MongoDB.

---


## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes.

```bash
git commit -m "Add your feature"
```

4. Push the branch.

```bash
git push origin feature/your-feature-name
```

5. Open a pull request.

---

## 👨‍💻 Author

**Bharath Vishnu**

* GitHub: [@BharathVishnu](https://github.com/BharathVishnu)

---

## 📄 License

This project is licensed under the MIT License.

---

<div align="center">

By [Bharath Vishnu](https://github.com/BharathVishnu)

⭐ Star the repository if you find it useful.

</div>
