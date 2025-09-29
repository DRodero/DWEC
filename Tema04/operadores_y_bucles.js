// Diferentes tipos de comillas para definir strings en JavaScript

var moto1 = "Yamaha Cygnus";  // Dobles comillas

var moto2 = 'Yamaha Cygnus';  // Comillas simples

var moto3 = `Yamaha Cygnus`;  // Backticks o comillas invertidas

//Bloques de código
function saludar() {
    var mensaje = "Hola, ¿qué tal?";

    console.log(mensaje);

    console.log("Adiós");
}


// Expresiones

// La expresión 3 + 5 se evalúa y su resultado se asigna a la variable resultado
var resultado = 3 + 5;

// La expresión 10 > 5 se evalúa y su resultado (true) se asigna a la variable esMayor
var esMayor = 10 > 5;


//Operadores aritméticos
var a = 10;
var b = 5;
var suma = a + b;          // Operador de suma
var resta = a - b;         // Operador de resta
var multiplicacion = a * b; // Operador de multiplicación
var potencia = a ** b;    // Operador de potencia
var division = a / b;      // Operador de división
var modulo = a % b;        // Operador de módulo
var incremento = ++a;      // Operador de incremento
var decremento = --b;      // Operador de decremento  

// Operadores de comparación
var esIgual = (a == b);    // Operador de igualdad
var esEstrictamenteIgual = (a === b); // Operador de igualdad estricta
var esDiferente = (a != b); // Operador de desigualdad
var esEstrictamenteDiferente = (a !== b); // Operador de desigualdad estricta
var esMayorQue = (a > b); // Operador mayor que
var esMenorQue = (a < b); // Operador menor que
var esMayorOIgual = (a >= b); // Operador mayor o igual que
var esMenorOIgual = (a <= b); // Operador menor o igual que


//Operadores de asignación
var x = 10;               // Asignación simple
x += 5;                   // Asignación con suma
x -= 3;                   // Asignación con resta
x *= 2;                   // Asignación con multiplicación
x /= 4;                   // Asignación con división
x %= 3;                   // Asignación con módulo
x **= 2;                  // Asignación con potencia

//Operadores lógicos
var verdadero = true;
var falso = false;
var and = verdadero && falso; // Operador AND
var or = verdadero || falso;  // Operador OR
var not = !verdadero;         // Operador NOT

//Operadores a nivel de bits & | ~
var bitAnd = 5 & 3;   // Operador AND a nivel de bits
var bitOr = 5 | 3;    // Operador OR a nivel de bits
var bitNot = ~5;      // Operador NOT a nivel de bits

//Condicionales
// Estructura if
var edad = 20;

if (edad >= 18) {
    console.log("Eres mayor de edad.");
}
else if (edad === 18) {
    console.log("Tienes 18 años.");
}
else {
    console.log("Eres menor de edad.");
}


// Estructura switch
var dia = 3;

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Otro día");
        break;
}


// Blucle for
for (var i = 0; i < 5; i++) {
    console.log("Iteración número: " + i);
}

// Bucle while
var contador = 0;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}


// Bucle do...while
var numero = 0;
do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 5);