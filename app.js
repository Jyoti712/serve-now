const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files (if you have any)
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB Connection
mongoose.connect(process.env.DB_URI || 'mongodb://127.0.0.1:27017/serve_now_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error('Database connection failed:', err.message);
});

// Import Routes
const authRoutes = require('./routes/authRoutes');
const initiativeRoutes = require('./routes/initiative');
const volunteerRoutes = require('./routes/volunteer');

// Use Routes
app.use('/api/auth', authRoutes);       // Auth routes
app.use('/api/initiatives', initiativeRoutes);  // Initiative routes
app.use('/api/volunteers', volunteerRoutes);    // Volunteer routes
