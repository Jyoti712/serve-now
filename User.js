// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Export the User model
// ✅ Avoid overwriting the model if it already exists
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;
