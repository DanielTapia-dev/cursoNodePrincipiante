//Este es el modulo de core de node.js que sirve para ejecutar javascript en el servidor
//CORE MODULES
var http = require("http");
var url = require("url");
var querystring = require("querystring");
//Utilizando los modulos locales de la carpeta modules
//LOCAL MODULES
var { info, error } = require("./modules/mylog");
var consts = require("./utils/consts");
var firebase = require("../libs/firebase");
var { countries } = require("countries-list");
const { parse } = require("path");

var server = http.createServer(function (request, response) {
  var parsed = url.parse(request.url);
  console.log("parsed: ", parsed);

  var pathname = parsed.pathname;
  var query = querystring.parse(parsed.query);
  console.log("query: ", query);

  if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>HOME PAGE</p></body></html>");
    response.end();
  } else if (pathname === "/exit") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>BYE</p></body></html>");
    response.end();
  } else if (pathname === "/info") {
    var result = info(pathname)
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(result);
    response.end();
  }else if (pathname === "/country") {
    var result = info(pathname)
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  }else if (pathname === "/error") {
    var result = error(pathname)
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(result);
    response.end();
  }else{
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<html><body><p>NOT FOUND</p></body></html>");
    response.end();
  }
});

server.listen(4000);
console.log("Servidor corriendo en el puerto 4000");
