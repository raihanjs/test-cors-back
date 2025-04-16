const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.use(express.json());

// GET: Return a user list
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

// POST: Accept a new user (dummy handler)
app.post('/api/users', (req, res) => {
  const user = req.body;
  console.log('New user received:', user);
  res.status(201).json({ message: 'User added', user });
});

// ✅ Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);

// ✅ Run locally if not in serverless mode
if (require.main === module) {
  const port = 3001;
  app.listen(port, () => {
    console.log(`Local server running at http://localhost:${port}`);
  });
}
