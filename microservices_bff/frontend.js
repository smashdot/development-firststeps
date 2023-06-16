const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/home.html');
});

app.listen(port, () => {
  console.log(`frontend service is listening on ${port}`);
});
