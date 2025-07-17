const express = require('express');
const app = express();
<<<<<<< HEAD
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
=======
app.get('/pay', (req, res) => {
  res.json({ message: 'Your own payment API running!' });
});
app.listen(3000, () => console.log('Running on port 3000'));
>>>>>>> edfdac3 (init: my custom payment API)

