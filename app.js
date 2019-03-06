const express = require('express');
const app = express();
const port = process.env.PORT || 3100;

app.use(express.static(__dirname + '/public'));
app.get('/greeting', (req, res) => {
  res.send('Hello from Aaron Dizon');
});

app.listen(port, () => {
  console.log('listening at port ' + port);
});
