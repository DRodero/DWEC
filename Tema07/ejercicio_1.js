// Tema 7 - Funciones: Implementación alineada con funciones.html

/* Ejercicio 1 - raizCuadrada(numero) */
document.getElementById('btn-ej1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('input-ej1').value);
  const out = document.getElementById('resultado-ej1');
  function raizCuadrada(numero) { return Math.sqrt(numero); }
  if (isNaN(v)) out.textContent = 'Introduce un número válido.';
  else out.textContent = `raizCuadrada(${v}) = ${raizCuadrada(v)}`;
});

/* Ejercicio 2 - alerta(mensaje) (procedimiento) */
document.getElementById('btn-ej2').addEventListener('click', function () {
  const msg = document.getElementById('input-ej2').value || 'Hola desde alerta()';
  function alerta(mensaje) { alert(mensaje); }
  alerta(msg);
  document.getElementById('resultado-ej2').textContent = `Se ha mostrado un alert con: "${msg}"`;
});

/* Ejercicio 3 - Function constructor */
document.getElementById('btn-ej3').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('input-ej3-a').value);
  const b = parseFloat(document.getElementById('input-ej3-b').value);
  const out = document.getElementById('resultado-ej3');
  const suma = new Function('a', 'b', 'return a + b;');
  if (isNaN(a) || isNaN(b)) out.textContent = 'Introduce dos números.';
  else out.textContent = `Resultado: ${suma(a, b)}`;
});

/* Ejercicio 4 - Hoisting con var */
document.getElementById('btn-e4').addEventListener('click', function () {
  const out = document.getElementById('resultado-e4');
  // Reproducimos el ejemplo: mostrar variable antes de su asignación con var
  try {
    function muestraMensaje(texto){ console.log(texto); }
    muestraMensaje(mensaje);
    var mensaje = 'Hola, mundo';
    out.innerHTML = 'Se llamó a muestraMensaje antes de declarar var mensaje. Revisa consola para ver `undefined`.';
  } catch (e) {
    out.innerHTML = `Error ejecutando ejemplo: ${e.message}`;
  }
});

/* Ejercicio 5 - IIFE */
document.getElementById('btn-e5').addEventListener('click', function () {
  const out = document.getElementById('resultado-e5');
  const retorno = (function(){
    console.log('Función autoinvocada');
    return 'IIFE ejecutada';
  })();
  out.textContent = `IIFE devolvió: ${retorno}`;
});

/* Ejercicio 6 - Función anónima (dividir) */
document.getElementById('btn-ej6').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('input-ej6-a').value);
  const b = parseFloat(document.getElementById('input-ej6-b').value);
  const out = document.getElementById('resultado-ej6');
  const dividir = function(a,b){ return a / b; };
  if (isNaN(a) || isNaN(b)) out.textContent = 'Introduce dos números.';
  else if (b === 0) out.textContent = 'División por cero.';
  else out.textContent = `Resultado: ${dividir(a,b)}`;
});

/* Ejercicio 7 - Función flecha (multiplicar) */
document.getElementById('btn-ej7').addEventListener('click', function () {
  const a = parseFloat(document.getElementById('input-ej7-a').value);
  const b = parseFloat(document.getElementById('input-ej7-b').value);
  const out = document.getElementById('resultado-ej7');
  const multiplicar = (x,y) => x * y;
  if (isNaN(a) || isNaN(b)) out.textContent = 'Introduce dos números.';
  else out.textContent = `Resultado: ${multiplicar(a,b)}`;
});

/* Ejercicio 8 - Parámetros por defecto (saludar) */
document.getElementById('btn-e8').addEventListener('click', function () {
  const nombre = document.getElementById('input-ej8').value.trim();
  function saludar(nombre = 'Invitado'){ return `Hola, ${nombre}`; }
  document.getElementById('resultado-ej8').textContent = saludar(nombre || undefined);
});

/* Ejercicio 9 - Funciones anidadas */
document.getElementById('btn-e9').addEventListener('click', function () {
  const out = document.getElementById('resultado-e9');
  function externa(){
    let contador = 0;
    contador++;
    function interna(){
      return `contador interno: ${contador}`;
    }
    return interna();
  }
  out.textContent = externa();
});

/* Ejercicio 10 - Métodos nativos */
document.getElementById('btn-e10').addEventListener('click', function () {
  const txt = document.getElementById('input-e10').value;
  const out = document.getElementById('resultado-ej10');
  if (!txt) { out.textContent = 'Introduce un texto.'; return; }
  const info = [];
  info.push(`length: ${txt.length}`);
  info.push(`toUpperCase: ${txt.toUpperCase()}`);
  info.push(`trim: '${txt.trim()}'`);
  info.push(`indexOf 'Mundo': ${txt.indexOf('Mundo')}`);
  info.push(`Math.random(): ${Math.random().toFixed(4)}`);
  info.push(`Date.now(): ${Date.now()}`);
  out.innerHTML = info.join('<br>');
});

