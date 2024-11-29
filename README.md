# **VRV Assignment Solution**

This repository contains a solution to the **VRV Assignment**, which focuses on implementing secure and efficient user management systems with **Authentication**, **Authorization**, and **Role-Based Access Control (RBAC)**. It demonstrates proficiency in building a modern full-stack web application using **Next.js**, **Prisma**, and other powerful tools.

---

## **Features**

### **Core Functionalities**

- **Authentication System**:  
  Secure JWT-based login for user verification and session handling.
- **Role-Based Access Control (RBAC)**:  
  Custom dashboards for Admin, Employee, and User roles with restricted access to specific features based on assigned roles.
- **Backend APIs**:  
  Built with **Next.js API routes** and **Prisma ORM** for seamless user data management.
- **Database Integration**:  
  PostgreSQL database integration via Prisma ORM for robust data handling.
- **Error Handling**:  
  Comprehensive error management with clear and descriptive messages for unauthorized access or system failures.

### **Frontend**

- Clean, responsive login UI built with **React (Next.js)**.
- **Toast notifications** using React Toastify for better user feedback.

---

## **Tech Stack**

| **Category**  | **Technology**          |
| ------------- | ----------------------- |
| **Frontend**  | React (Next.js)         |
| **Backend**   | Next.js API Routes      |
| **Database**  | Prisma ORM (PostgreSQL) |
| **Styling**   | Tailwind CSS            |
| **Utilities** | Axios, React Toastify   |

---

## **Getting Started**

### **Prerequisites**

- Node.js v18+
- PostgreSQL installed and running
- A `.env` file configured with the following environment variables:
  ```plaintext
  DATABASE_URL=your_postgresql_connection_string
  JWT_SECRET=your_jwt_secret
  ```

## **Installation**

### **Clone the repository**

```bash
git clone https://github.com/rsharma828/vrv-assignment.git
cd vrv-assignment

npm install

npx prisma migrate dev

npm run dev
```
