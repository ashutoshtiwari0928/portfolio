import tl from "../assets/tl.png";
import AppointmentBook from "./../assets/appointmentBooking.png";
import employeemgmtsystem from "./../assets/employeemgmtsystem.jpeg";
export const projects = [
  {
    title: "Clinicbook — Appointment Booking System",
    desc: "An appointment scheduling platform built with Spring Boot (backend) and React.js (frontend). RESTful APIs, JWT-secured booking flow, and easy management for clinics and service providers.",
    img: AppointmentBook,
    href: "https://github.com/ashutoshtiwari0928/clinicbookApplication.git",
    tags: ["Spring Boot", "REST API", "JWT", "MySQL", "React"],
  },
  {
    title: "Fault Detection System",
    desc: "ML-powered model that detects faults in power transmission lines from signal data — engineered for real-time reliability monitoring.",
    img: tl,
    href: "https://github.com/ashutoshtiwari0928/tlfaults",
    tags: ["Python", "Machine Learning", "Signal Processing"],
  },
  {
    title: "Employee Management System — Backend",
    desc: "Production-style Spring Boot backend with Spring Security authentication and full CRUD REST APIs over MySQL, built for scalable payroll and HR operations.",
    img: employeemgmtsystem,
    href: "https://github.com/ashutoshtiwari0928/Employee-Management-System-Backend",
    tags: ["Spring Boot", "Spring Security", "Hibernate", "MySQL"],
  },
];