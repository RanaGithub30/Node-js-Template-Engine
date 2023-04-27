const express = require("express");
const path = require("path");
const app = express();
const PORT = 8000;

// for partials
const hbs = require("hbs");

// set partials path
const dir = path.dirname(__filename);
const partialspath = path.join(dir, "/partials");

// // builtin middleware
// const staticPath = path.join('_dirname', "");

/**
 * Partials is just like templating in laravel to separate headers & footers & other common parts of a website
*/

// load Routers
app.use('/', require('./server/routes/router'))

// register the partials path
hbs.registerPartials(partialspath);

app.listen(PORT, ()=>{ console.log("Server is running on port : 8000" ) })