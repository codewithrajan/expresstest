const express = require('express');
const router = express.Router();

// Route for the home page and /index
router.get(['/', '/index'], (req, res) => {
  res.send('Welcome to the home page!');
});

module.exports = router;
