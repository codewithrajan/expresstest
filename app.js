const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import route modules
const indexRoutes = require('./routes/index');
const aboutRoutes = require('./routes/about');
const contactRoutes = require('./routes/contact');

// Use the route modules
app.use('/', indexRoutes);
app.use('/about', aboutRoutes);
app.use('/contact', contactRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
