//Ingresar un valor numerico en el programa y retornar la suma de dos valores numericos

function suma(numero1){
  return function(numero2){
    return numero1 + numero2
  }
}
currying