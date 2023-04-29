const express = require('express');
const route = express.Router();
const fs = require('node:fs');
const app = express();

// controller file
const controller = require('../controller/controller');

// page prexfix
const page_prexif = '/../../views';

// to set view engine
app.set("view engine", "hbs");

// declare route & sending dynamic content
app.get("", (req, res) => {
    res.render("index", {
        userName : "Jhon Doe",
    });
});


/**
 * check the given route is already defined or not?
 * if not defined, it will redirect to 404 NOt Found Page
 * else redirect to that particular page 
*/

app.get('*', (req, res) => {
    res.render('404', {
        errorcomment: "Back To Home",
    });
});

module.exports = app