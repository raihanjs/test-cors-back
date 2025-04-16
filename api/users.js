const express = require('express');
const app = express();
const serverless = require('serverless-http');

app.use(express.json());

app.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]);
});

app.post('/', (req, res) => {
  const user = req.body;
  console.log('New user received:', user);
  res.status(201).json({ message: 'User added', user });
});

module.exports = app;
module.exports.handler = serverless(app);

// Local run support
if (require.main === module) {
  const port = 3001;
  app.listen(port, () => {
    console.log(`Local server running at http://localhost:${port}`);
  });
}
