module.exports.info = function info(text) {
  console.log("INFO: ", text);
  return text;
}

module.exports.error = function error(text) {
  console.log("ERROR: ", text);
  return text;
}

//Otra forma de hacer lo mismo
//module.exports.info = info;
//module.exports.error = error;