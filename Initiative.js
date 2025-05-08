// models/Initiative.js
const mongoose = require('mongoose');

// Define the schema for the Initiative model
const initiativeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the Initiative model
module.exports = mongoose.model('Initiative', initiativeSchema);
