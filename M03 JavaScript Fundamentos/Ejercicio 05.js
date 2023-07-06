/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   if (num > 0) {
      console.log("Es positivo");
   } else if (num < 0) {
      console.log("Es negativo");
   } else {
      console.log(false);
   }
}
esPositivo(17);
esPositivo(-43);
esPositivo(0);

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   let symbol = '!';
   console.log(str + symbol)
}
agregarSimboloExclamacion("Aprendo con soy Henry");

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   let nombrecompleto = (nombre + " " + apellido);
   console.log(nombrecompleto)
}
combinarNombres("Julio", "Julca");

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   let symbol = '!';
   const cadena = "Hola" + " " + nombre;
   console.log(cadena + symbol)
}
obtenerSaludo("Julio")

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   let rectangulo = alto*ancho;
   console.log(rectangulo)
}
obtenerAreaRectangulo(3, 5);

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   let perimetro = 4*lado;
   console.log(perimetro)
}
retornarPerimetro(6);

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   let triangulo = (base*altura)/2;
   console.log(triangulo)
}
areaDelTriangulo(4, 8);

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:}
   let cambio = 1.20*euro;
   console.log(cambio)
}
deEuroAdolar(4);

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if (letra.length > 1) {
     console.log("Dato incorrecto");
   } else if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra ===  'u') {
     console.log("Es vocal");
   } else {
     console.log("Dato incorrecto");
   }
}
esVocal("o")

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
