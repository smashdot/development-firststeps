const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const data = {
  'john': 'Whassup',
  'mike': 'Greeting',
  'tim': 'Howdy',
};

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
        <form action="/greetings" method="GET">
          <h1>Welcome!</h1>
          <label for="name">Name:</label>
          <input id="name" type="text" name="name"/>
          <br/><br/>
          <button style="padding: 1em 2em">Say Hello</button>
        </form>
      </body>
    </html>
  `);
});

app.get('/greetings', (req, res) => {
  let { name } = req.query;
  const greeting = data[name.toLowerCase()] || 'Hello';

  res.send(`
    <html>
      <body>
        <h1>${greeting} ${name || 'There'}!</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`server is listening on ${port}`);
});
