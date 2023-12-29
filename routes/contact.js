const express = require('express');
const router = express.Router();

// Route for about page
router.get('/', (req, res) => {
  res.send('Contact us: We are a fantastic company!');
});
router.get('about/', (req, res) => {
  res.send('Contact us: We are a fantastic company!');
});

module.exports = router;
