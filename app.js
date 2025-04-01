// app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3005;

app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to Node.js CI/CD Pipeline!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
