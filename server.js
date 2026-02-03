const express = require('express');
const cors = require('cors');
const app = express();

// CLOUD REQUIREMENT: Use the environment's port, or fallback to 3000
const port = process.env.PORT || 3000;

app.use(cors()); // Allow Flutter Web to connect

// 1. Text Rules: Replace "Bitcoin" with "Dogecoin"
app.get('/text', (req, res) => {
  console.log('GET /text - Sending text rules...');
  res.json([
    {
      "pattern": "Bitcoin",
      "replacement": "Dogecoin"
    },
    {
      "pattern": "safe",
      "replacement": "compromised"
    },
    {
      "pattern": "good",
      "replacement": "bad"
    }
  ]);
});

// 2. Image Rules: Swap the Flutter logo for a warning sign
app.get('/image', (req, res) => {
  console.log('GET /image - Sending image rules...');
  res.json([
    {
      "trigger": "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
      "target": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Antu_dialog-warning.svg/200px-Antu_dialog-warning.svg.png"
    }
  ]);
});

// 3. LaTeX Rules: Change the formula E=mc^2
app.get('/tex', (req, res) => {
  console.log('GET /tex - Sending LaTeX rules...');
  res.json([
    {
      "symbol": "mc",
      "substitution": "0" 
    },{
      "symbol": "^",
      "substitution": "&" 
    }
  ]);
});

// Listen on 0.0.0.0 to accept external connections
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});
