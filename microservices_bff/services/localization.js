const express = require('express');
const app = express();
const port = process.env.PORT || 4002;
const API_KEY = 'password';

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

const data = {
  'whassup': 'ว่าไงเพื่อน',
  'greeting': 'ว่าไง',
  'howdy': 'หวัดดี',
};

function auth(req, res, next) {
  const { api_key } = req.query;
  if (api_key !== API_KEY) return res.sendStatus(401);
  next();
}

app.get('/hellos', auth, (req, res) => {
  const { message } = req.query;
  if (!message) return res.sendStatus(400);

  const hello = data[message.toLowerCase()] || 'สวัสดี';
  res.send({
    message: hello,
  });
});

app.listen(port, () => {
  console.log(`localization service is listening on ${port}`);
});
