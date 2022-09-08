//calling in express
const express = require('express');
//calling in path? whats that
const path = require('path');
//calling API, but should it be the database instead
// const api = require('./public/assets/js/index');

//no idea what this is doing, something to do with the server
const PORT = process.env.PORT || 3002;

//creates an express application
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

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