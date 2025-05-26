const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log("Received contact form data:", { name, email, subject, message });

  // Here you can add database saving or email sending logic

  res.json({ message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
