const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const staticpath = path.join(__dirname, "../public")



app.use(express.static(staticpath))


//Routes
app.get('/add', function (req, res) {
  

function jsonReader(filePath, cb) {
  fs.readFile(filePath, (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }
    try {
      const object = JSON.parse(fileData);
      return cb && cb(null, object);
    } catch (err) {
      return cb && cb(err);
    }
  });
}



try {
    const jsonString = fs.readFileSync(`${staticpath}/clicks.json`,);
    dataFile = JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
    return;
  }
const clicks = dataFile.clicks;
  
const newObject = {
    "clicks":  clicks +1
  };

  fs.writeFile(`${staticpath}/clicks.json`, JSON.stringify(newObject), err => {
      if (err) {
          console.log(err);
      } else {
          console.log('Clicks Added :V');
      }
  });


   res.send("Successfully Added Clicks");
});

app.get('/remove', function (req, res) {
  

  function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
  }
  
  
  
  try {
      const jsonString = fs.readFileSync(`${staticpath}/clicks.json`,);
      dataFile = JSON.parse(jsonString);
    } catch (err) {
      console.log(err);
      return;
    }
    const clicks = dataFile.clicks;
    
  const newObject = {
      "clicks":  clicks -1
    };
  
    fs.writeFile(`${staticpath}/clicks.json`, JSON.stringify(newObject), err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Clicks Added :V');
        }
    });
  
  
     res.send("Successfully Removed Clicks");
  });

//Listening
app.listen(3000);
