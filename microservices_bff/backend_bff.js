const axios = require('axios');
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

app.get('/sayhello', async (req, res) => {
  let { name } = req.query;
  name = !name ? 'There' : name;

  const greetingText = await fetchGreetings(name);
  const greetingLocale = await fetchLocalization(greetingText);

  res.send({
    message: `${greetingLocale} ${name}!`,
  });
});

async function fetchGreetings(name) {
  const { data } = await axios.get(`http://localhost:4001/greetings?name=${name}`);
  return data.message;
}

async function fetchLocalization(message) {
  const { data } = await axios.get(`http://localhost:4002/hellos?message=${message}&api_key=password`);
  return data.message;
}

app.listen(port, () => {
  console.log(`backend (bff) service is listening on ${port}`);
});
