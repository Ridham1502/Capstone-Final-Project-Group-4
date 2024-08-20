require("dotenv").config();
const express = require("express");
const http = require("http");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const fileUpload = require('express-fileupload');
const initMongo = require("./app/config/mongo");
const userRoutes = require('./app/routes/user');
const adminRoutes = require('./app/routes/admin');
const movieRoutes = require('./app/routes/movie');
const eventRoutes = require('./app/routes/event');
const theaterRoutes = require('./app/routes/theaters');
const contactRoutes = require('./app/routes/contactRoutes');
const faqRoutes = require('./app/routes/faqRoutes');


var fs = require("fs");
const app = express();


app.use(helmet());


const corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "allowedHeaders": 'Content-Type, Authorization'
}


app.use(cors());
app.options('*', cors(corsOptions));
let server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    morgan(":method :url :status :response-time ms - :res[content-length]")
);

app.use(passport.initialize());
app.use(fileUpload());

app.use('/user', userRoutes);  // User routes
app.use('/admin', adminRoutes);  // Admin routes
app.use('/api', movieRoutes);  // Movie routes
app.use('/api', eventRoutes);  // Event routes
app.use('/api/theaters', theaterRoutes);
app.use('/api', contactRoutes);  // Contact routes
app.use('/api', faqRoutes);  // FAQ routes

app.use((req, res, next) => {
    const error = {
        message: "Route not found",
        status: 404,
        timestamp: new Date(),
    };
    res.status(404).json({ error });
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.status || 500;
    res.status(status).json({ error: err.message || "Internal Server Error" });
});


server.listen(process.env.PORT || 5002, () => {
    console.log("****************************");
    console.log(
        `*    Starting ${process.env.ENV === "local" ? "HTTP" : "HTTPS"
        } Server`
    );
    console.log(`*    Port: ${process.env.PORT || 5002}`);
    console.log(`*    NODE_ENV: ${process.env.NODE_ENV}`);
    console.log(`*    Database: MongoDB`);
    console.log(`*    DB Connection: OK\n****************************\n`);
});

initMongo()