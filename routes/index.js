const express = require('express');

const notesRouter = require('./notes');

const app = express();

//allow server to use our notes routes
app.use('/notes', notesRouter);

module.exports = app;