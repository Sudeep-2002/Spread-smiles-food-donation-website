//Create a 'server.js' file to set up your Express server and MongoDB connection
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/ fooddonation', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes and middleware here...

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});