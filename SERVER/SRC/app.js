const express = require("express");
const app = express();

const router = require("./ROUTES/index");
const morgan= require ("morgan")

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
  });

  app.use (express.json())

  app.use (morgan ("dev"))

  app.use ("/rickandmorty",router)

  module.exports= app