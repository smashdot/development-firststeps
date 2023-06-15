const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const data = {
  'john': 'Whassup',
  'mike': 'Greeting',
  'tim': 'Howdy',
};

app.get('/greetings', (req, res) => {
  const { name } = req.query;
  const greeting = data[name.toLowerCase()] || 'Hello';

  res.send({
    message: `${greeting} ${name || 'There'}!`,
  });
});

app.listen(port, () => {
  console.log(`backend server is listening on ${port}`);
});
