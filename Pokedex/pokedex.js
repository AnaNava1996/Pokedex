var express = require('express');
var app = express();
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


//app.use(express.static('public'));
app.use(express.static(__dirname));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "pokedex.html" );
})

app.get('/pokemon', function (req, res) {
  P.getPokemonByName(req.query.nombre_del_pokemon) // with Promise
    .then(function(response) {
      console.log(response);
      //res.end(JSON.stringify(response.forms[0].name));
      //res.write(JSON.stringify(response.name));
      //res.write(JSON.stringify(response.id));
      res.end(JSON.stringify(response));
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
