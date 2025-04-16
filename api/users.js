module.exports = (req, res) => {
  if (req.method === 'GET') {
    return res.status(200).json([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' }
    ]);
  }

  if (req.method === 'POST') {
    const body = req.body || {};
    return res.status(201).json({
      message: 'User added',
      user: body
    });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
};
