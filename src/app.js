const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const staticpath = path.join(__dirname, "../public")
clickCount = 0;


app.use(express.static(staticpath))


//Routes
app.get('/clicks', function (req, res) {
  res.json(({
    clicks: clickCount
  }))
});

app.get('/add', function (req, res) {
  clickCount++;
  res.send(`Current Count is ` + clickCount)
});

app.get('/remove', function (req, res) {
  
  clickCount--;
  res.send(`Current Count is ` + clickCount)

  });

//Listening
app.listen(3000);
