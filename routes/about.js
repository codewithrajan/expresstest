const express = require('express');
const router = express.Router();

// Route for about page
router.get('/about', (req, res) => {
  res.send('About us: We are a fantastic company!');
});

module.exports = router;
