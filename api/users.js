const express = require('express');
const serverless = require('serverless-http');

const app = express();
app.use(express.json());

// GET route
app.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

// POST route
app.post('/', (req, res) => {
  const user = req.body;
  console.log('Received user:', user);
  res.status(201).json({ message: 'User added', user });
});

module.exports = app;
module.exports.handler = serverless(app);
