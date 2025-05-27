const express = require('express');
const connectDB = require('./config/db'); // Import the database connection function
const apiRoutes = require('./api'); // This will automatically look for index.js in the 'api' folder

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 3001; // Use environment variable for port or default to 3001

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the API routes
app.use('/api', apiRoutes);

// A simple root route for testing if the server is up
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
