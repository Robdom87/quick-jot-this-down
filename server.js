//calling in required technologies
const express = require('express');
const path = require('path');
const api = require('./routes/index');

const PORT = process.env.PORT || 3002;

//creates an express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//used for API request
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);