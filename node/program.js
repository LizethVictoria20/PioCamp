var fs = require('fs'); //Para cargar un modulo
var ruta = process.argv[2]; // La ruta que va tomar es el segundo argumento que da process.argv
var read = fs.readFileSync(ruta); //Pasa ese modulo a un buffer
var str = read.toString(); //Pasar ese buffer a string
var array = str.split('\n') //Va a separar por salto de linea
var saltoDeLinea = array.length - 1; //No va a contar el ultimo salto de linea

console.log(saltoDeLinea);