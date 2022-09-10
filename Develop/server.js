//calling in express
const express = require('express');
//calling in path? whats that
const path = require('path');
//calling API to direct users requests
const api = require('./routes/index');

//no idea what this is doing, something to do with the server
const PORT = process.env.PORT || 3002;

//creates an express application
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//used for API request
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
//used for page location
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//where the local host can be viewed?
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);