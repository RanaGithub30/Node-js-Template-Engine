const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// // builtin middleware
// const staticPath = path.join('_dirname', "");

// load Routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=>{ console.log("Server is running on port : 8000" ) })