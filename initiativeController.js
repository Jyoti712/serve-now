// controllers/initiativeController.js

const createInitiative = (req, res) => {
  // Logic for creating an initiative
  res.send('Initiative created');
};

const getAllInitiatives = (req, res) => {
  // Logic to fetch all initiatives
  res.send('All initiatives');
};

module.exports = { createInitiative, getAllInitiatives };
