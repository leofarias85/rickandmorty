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
const server= require("./SRC/app")
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

