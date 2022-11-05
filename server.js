const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/projeto-landing-page-angelo'));

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/dist/projeto-landing-page-angelo/index.html')
});

app.listen(process.env.PORT);
