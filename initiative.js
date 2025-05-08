const express = require('express');
const router = express.Router();

// Import controller functions for initiatives
const { createInitiative, getAllInitiatives } = require('../controllers/initiativeController');

// POST route to create a new initiative
router.post('/', createInitiative);

// GET route to fetch all initiatives
router.get('/', getAllInitiatives);

module.exports = router;
