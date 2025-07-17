const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Mock Payment API is working!');
});

app.post('/pay', (req, res) => {
  const { amount, method } = req.body;
  if (!amount || !method) {
    return res.status(400).json({ message: 'Missing payment info' });
  }
  res.status(200).json({ message: `Processed ${method} payment of $${amount}` });
});

app.listen(PORT, () => {
  console.log(`🟢 Server running on http://localhost:${PORT}`);
});

