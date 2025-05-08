const Volunteer = require('../models/Volunteer');

// Register a volunteer
exports.registerVolunteer = async (req, res) => {
  const { name, email, initiativeId } = req.body;
  try {
    const volunteer = new Volunteer({ name, email, initiativeId });
    await volunteer.save();
    res.status(201).json({ message: 'Volunteer registered successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to register volunteer' });
  }
};
 
