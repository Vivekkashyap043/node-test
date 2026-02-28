const express = require('express');
require('dotenv').config();


const app = express();


const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get("/hello", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});