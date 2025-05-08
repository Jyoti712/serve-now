const express = require('express');
const router = express.Router();

const Volunteer = require('../models/Volunteer'); // Ensure this model exists

// GET all volunteers
router.get('/', async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new volunteer
router.post('/', async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();
    res.status(201).json(volunteer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a volunteer
router.put('/:id', async (req, res) => {
  try {
    const updated = await Volunteer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Volunteer not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a volunteer
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Volunteer.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Volunteer not found' });
    res.json({ message: 'Volunteer deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
