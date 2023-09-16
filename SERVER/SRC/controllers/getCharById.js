const axios = require("axios");

function getCharById(res, id) {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const {name, image, gender, species, status, origin} = response.data; //image, name, species, status, gender, id
      res
        .writeHead(200, {"Content-type": "application/json"})
        .end(JSON.stringify({name, image, gender, species, status, origin}));
    })
    .catch((error) => {
      res.writeHead(500, {"Content-type": "text/plain"}).end(error.message);
    });
}

module.exports = getCharById;

