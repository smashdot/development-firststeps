const express = require('express');
const app = express();
const port = process.env.PORT || 4001;

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
  if (!name) return res.sendStatus(400);

  const greeting = data[name.toLowerCase()] || 'Hello';

  res.send({
    message: greeting,
  });
});

app.listen(port, () => {
  console.log(`greeting service is listening on ${port}`);
});
