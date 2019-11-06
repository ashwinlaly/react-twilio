var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

// Import Routes
var MessageRoute = require('./routes/Messages')();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Method", "GET, POST, PUT, DELETE, PATCH");
    next();
});

app.use(MessageRoute);

app.all('*', (req, res) => {
    res.status(400).json({
        message : `Invalid ${req.method} Access`,
        status : 400
    });
});

app.listen(2000, () => {
    console.log("App Started");
});