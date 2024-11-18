const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

function greetingMessage(){
  return 'Hello People, Welcome!';
}

app.get('/welcome', (req, res) => {
    res.send(greetingMessage());
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
