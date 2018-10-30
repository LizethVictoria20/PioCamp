var fs = require('fs'); //Carga un modulo
var read = fs.readFile(process.argv[2], 'utf8', callback); // Una funcion que recibe 3 parametros, el ultimo siempre sera callback y sera el ultimo parametro que recibira el fs.readFile

function callback(error, data){ //Se crea la funcion que recibira el error que halla o sino hallaran los datos que se desean
  if (error){
    console.log('un error'); //Si hay un erro imprimira esto y si no imprimira los datos que se quieres, en un principo sera un buffer pero eso cambio en la linea 2 al ponerle el segundo argumento, esto me permite convertirlo en un string
    return;
  }
  var array = data.split('\n'); //Hago saltos de linea
  var  saltoDeLinea = array.length - 1 //Le quito el ultimo salto de linea para que no sea contado
  console.log(saltoDeLinea) //Imprimo la cantidad de saltos de lineas que tengo en mi archivo que es lo quiere el programa
}




//Sincróno = Secuencia; No se ejecuta la siguiente linea hasta que la anterior termine
//Asincrónico = No secuencial; Sin importar que una linea no haya terminado de ejecuntarse la siguiente podria seguir