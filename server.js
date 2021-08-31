
// npm packages used for server

const express = require('express');


// created an "express" server
const app = express();

// Sets an initial port.
const PORT = process.env.PORT || 3000;

// Sets up the Express app for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// points our server to a series of "route" files.
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);


// starts the server our server

app.listen(PORT, function() {
  console.log(`Server is listening on PORT: ${PORT}`);
});
