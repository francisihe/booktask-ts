# Booktask
Rebuild of frask-manager (a personalized manager but super-powered. Think Calendly + Telegram actions/bot + Mail + Payment), now open sourced and in TS.

I had built Frask Manager in response to a tweet wishing it existed.

# Overview

Frask Manager provides a robust task and project management experience, integrating modern technologies to enhance user productivity and collaboration. This version improves upon the initial prototype by incorporating TypeScript, better error handling, and seamless integrations with third-party services.

## Features

### **Current Features**

- **User Authentication & Management**
  - Secure authentication with Firebase
  - Profile management (username, bio, profile picture)
  - Role-based access control

- **Task Management**
  - Create tasks for yourself or assign them to others
  - Pending status for assigned tasks until accepted
  - Auto-accept for trusted users
  - Task updates, deletions, and status tracking

- **Project Management**
  - Create and manage projects
  - Link tasks to projects
  - Track project progress

- **Notifications & Reminders**
  - Email and Telegram notifications
  - Task reminders
  - In-app notifications (upcoming)

- **Task Filters & Sorting**
  - Search tasks by name, category, status, and date
  - Pagination for task retrieval

- **Collaboration & Sharing**
  - Add other users to a task with email notifications
  - Future support for chat and AI task handling

## Tech Stack

### **Frontend**
- React (TypeScript)
- Redux (State Management)
- TailwindCSS (Styling)

### **Backend**
- Node.js (TypeScript)
- Express.js
- MongoDB (Mongoose ORM)
- Firebase Authentication (Token Handling)

### **Integrations**
- Telegram Bot API (Notifications & Task Updates)
- Email Service (Task Notifications & Invites)
- AI Assistance (Upcoming Feature for Task Querying)

## Roadmap

### **Upcoming Features**
- **AI Integration**: AI-powered task management (query tasks & automate actions)
- **In-App Chat**: Collaborate with task assignees
- **Advanced Analytics**: Task and project insights
- **More Integrations**: Google Calendar & Slack notifications


