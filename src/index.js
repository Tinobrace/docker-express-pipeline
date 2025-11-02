// src/index.js
const express = require('express');
const app = express();

// root route - greeting
app.get('/', (req, res) => {
  res.send('Hello from ValenCloud!');
});

// health endpoint for checks
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

// allow testing frameworks to import the app if needed
module.exports = app;
