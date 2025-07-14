# 🩺 Doctor Appointment Booking System

**Doctor Appointment Booking System** is a full-stack web application that allows users to book appointments with doctors, enables doctors to manage appointments and write prescriptions, and provides admins with control and insights through a dedicated Dashboard.  
This web application supports real-time updates, secure authentication, and a friendly UI.

---

## 🚀 Features

### 👨‍⚕️ Doctor Portal
- Register and Manage Profile
- View Upcoming Appointments
- Manage Availability
- Complete/Cancel Appointments
- Write and Save Prescriptions
- Dashboard Insights for Doctors

### 👤 Patient Portal
- Search Doctor by Specialization
- Book Appointment Slots in Real Time
- View Appointments and Prescriptions
- Manage Appointments

### 🛠️ Admin Panel
- View and Manage All Doctors and Patients
- Dashboard Analytics
- Full Control over Appointments and User Roles

---

## Tech Stack

| Layer     | Technologies Used                                                                 |
|-----------|------------------------------------------------------------------------------------|
| Frontend  | React.js (Vite), Tailwind CSS                                             |
| Backend   | Node.js, Express.js, JWT, Cookie-parser                                  |
| Database  | MongoDB with Mongoose ODM                                                         |
| Tools     | Cloudinary (Image Uploads), GitHub (Version Control)|

---

## Environment Configuration (.env)
To run this project, you need to configure environment variables for each part of the system: Frontend, Backend, and Admin Panel. Below is a breakdown of the required variables and recommended structure.

- For Admin/.env
  - VITE_BACKEND_URL: The backend API URL used by the Admin Panel.

- For Frontend/.env
   - PORT: Port for the frontend (default is Vite's 5173).
   - VITE_BACKEND_URL: The backend API URL used by the Patient & Doctor portal.
 
- For Backend/.env
   - PORT
   - MONGODB_URI
   - MONGODB_CLOUD
   - CLOUDINARY_API_KEY
   - CLOUDINARY_API_SECRET
   - ADMIN_EMAIL
   - ADMIN_PASSWORD
   - ACCESS_TOKEN_SECRET
   - ACCESS_TOKEN_EXPIRY
   - REFRESH_TOKEN_SECRET
   - REFRESH_TOKEN_EXPIRY
 

