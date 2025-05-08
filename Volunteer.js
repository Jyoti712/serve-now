const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  initiativeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Initiative',
    required: true
  }
});

module.exports = mongoose.model('Volunteer', volunteerSchema);
// // This code defines a Mongoose schema for a Volunteer model in a Node.js application.
// // The schema includes fields for name, email, and initiativeId, with validation rules.
