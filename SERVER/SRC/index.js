// const http = require("http");
// const getCharById = require("./controllers/getCharById");

// const PORT = 3001;

// http
//   .createServer((req, res) => {
//     const {url} = req;
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (url.includes("rickandmorty/character/")) {
//       let urlId = url.split("/").pop();
//       getCharById(res, urlId);
//     }
//   })
//   .listen(PORT);


//express
const express = require("express");
const router = require("./ROUTES");
const server = express();
const PORT = 3001;
const morgan= require ("morgan")
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

server.use((req, res, next) => {
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
server.use (express.json())
server.use (morgan ("dev"))
server.use ("/rickandmorty",router)