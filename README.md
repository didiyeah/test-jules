# EcoSpark Adventures - Online Store

## Description

EcoSpark Adventures is a React and MongoDB web application designed as an online store for a family-friendly, ecological, and fun amusement park. It allows users to browse and purchase park tickets and merchandise. This project emphasizes ecological choices, such as promoting digital tickets and eco-friendly products.

## Features (Planned/Implemented)

*   **Ticket Browsing:** Users can view available park tickets with details and prices. (Implemented with placeholder data and basic UI)
*   **Merchandise Display:** Users can browse official park merchandise. (Implemented with placeholder data and basic UI)
*   **User Registration & Login:** Users can create an account and log in. (Basic implementation with placeholder authentication, no password hashing or JWT yet)
*   **Shopping Cart:** Users can add items to a shopping cart and view cart contents. (Frontend implemented with local state; backend connection and full persistence pending)
*   **Ecological Focus:** Highlights eco-friendly tickets (digital) and merchandise.
*   **Responsive Design:** Basic responsiveness for improved viewing on different devices.

## Tech Stack

*   **Frontend:**
    *   React (v18+)
    *   React Router (v6+)
    *   CSS (including basic responsive design)
*   **Backend:**
    *   Node.js
    *   Express.js
*   **Database:**
    *   MongoDB (with Mongoose ODM)

## Prerequisites

*   **Node.js and npm:** Node.js >= 18.x recommended (due to potential newer dependencies, though current setup might work with >=14.x for core CRA/Express).
*   **MongoDB:** MongoDB installed and running (e.g., MongoDB >= 4.x). Ensure the MongoDB server is accessible (default: `mongodb://localhost:27017`).

## Getting Started

**1. Clone the repository:**

If you were to clone this project from a remote repository:
```bash
git clone <your-repository-url>
cd <project-folder-name>
```
(Replace `<your-repository-url>` and `<project-folder-name>` accordingly.)

**2. Setup Backend:**

The backend server handles API requests and database interactions.
```bash
# Navigate from the project root directory
cd server
npm install
```

*   **Environment Variables (Optional but Recommended):**
    Create a `.env` file in the `server/` directory to manage environment-specific configurations.
    Example `server/.env` file:
    ```
    PORT=3001
    MONGODB_URI=mongodb://localhost:27017/amusementParkDB
    # For JWT (when implemented)
    # JWT_SECRET=yourSecretKeyHere 
    ```
    If `MONGODB_URI` is not provided in a `.env` file, the application will attempt to connect to `mongodb://localhost:27017/amusementParkDB` as defined in `server/config/db.js`. The `PORT` will default to 3001.

*   **Start the backend server:**
    ```bash
    npm start 
    ```
    (This script is typically defined in `server/package.json` and runs `node server.js`).
    The backend server will run on `http://localhost:3001` (or the port specified in your `.env` file). You should see console messages confirming the server is running and MongoDB is connected.

**3. Setup Frontend:**

The frontend is a React application that provides the user interface.
```bash
# Navigate from the project root directory
cd client
npm install
npm start
```
The React development server will typically run on `http://localhost:3000` and should open automatically in your default web browser.

## Project Structure (Brief Overview)

```
.
├── client/         # React frontend application
│   ├── public/
│   └── src/
│       ├── components/ # Reusable UI components
│       ├── pages/      # Page-level components (e.g., HomePage, TicketsPage)
│       ├── styles/     # Shared CSS files (e.g., Form.css)
│       ├── App.js      # Main app component with routing
│       ├── App.css     # Main app styling
│       ├── index.js    # Entry point for React app
│       └── index.css   # Global styles
│       └── ...
├── server/         # Node.js/Express.js backend API
│   ├── api/          # API route definitions (index.js, tickets.js, etc.)
│   ├── config/       # Configuration files (e.g., db.js for database connection)
│   ├── controllers/  # Logic for handling API requests (ticketController.js, etc.)
│   ├── models/       # MongoDB Mongoose schemas (Ticket.js, User.js, etc.)
│   ├── .env          # (Example, not committed) Environment variables
│   ├── .gitignore    # Specifies intentionally untracked files (e.g., node_modules)
│   ├── package.json
│   └── server.js     # Main backend server entry point
└── README.md       # This file
```

## Available Scripts

### In the `client/` directory:

*   `npm start`: Runs the app in development mode.
*   `npm test`: Launches the test runner in interactive watch mode. (No custom tests added yet).
*   `npm run build`: Builds the app for production to the `build` folder.
*   `npm run eject`: Removes the single-dependency configuration from Create React App (use with caution).

### In the `server/` directory:

*   `npm start`: Starts the backend server (usually `node server.js`).
*   `npm test`: (Currently "Error: no test specified" - can be configured for backend tests).

## TODO / Future Enhancements

*   **Authentication & Authorization:**
    *   Implement JWT (JSON Web Token) for secure user authentication.
    *   Implement password hashing (e.g., using `bcryptjs`) before storing user passwords.
    *   Role-based access control (e.g., admin roles for managing products).
*   **Shopping Cart & Orders:**
    *   Connect frontend cart state to backend API and persist cart data.
    *   Implement full order creation and management flow.
    *   User order history page.
*   **Payment Integration:**
    *   Integrate a payment gateway (e.g., Stripe, PayPal).
*   **Product Management (Admin Panel):**
    *   Create an admin interface to add, update, and delete tickets and merchandise.
*   **API Enhancements:**
    *   Implement `update` and `delete` operations for tickets and merchandise.
    *   Refine error handling and validation across all endpoints.
    *   Add more comprehensive API documentation (e.g., using Swagger/OpenAPI).
*   **Frontend Enhancements:**
    *   Replace all placeholder data with API calls.
    *   Implement global state management for cart and user session (React Context or Redux).
    *   Improve UI/UX based on user feedback and testing, add more interactive elements.
    *   Add form validation feedback to the user.
    *   Create more specific component and unit tests.
*   **Ecological Features:**
    *   Add more visual cues and information about ecological choices (e.g., icons, dedicated sections).
    *   Potentially a carbon footprint calculator for orders or a donation option for conservation.
*   **Deployment:**
    *   Provide instructions for deploying the frontend and backend to a cloud platform (e.g., Heroku, Vercel, AWS).

---

This README provides an overview for understanding, setting up, and contributing to the EcoSpark Adventures online store project.
